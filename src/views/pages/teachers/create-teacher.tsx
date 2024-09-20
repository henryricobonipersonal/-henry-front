import { type ChangeEvent, useState } from 'react'

import { Divider } from '@views/components/tw/divider'
import { Field, Fieldset, Label, Legend } from '@views/components/tw/fieldset'
import { Text } from '@views/components/tw/text'

import { Button } from '@views/components/tw/button'
import { Input } from '@views/components/inputs'
import { InputDocument } from '@views/components/inputs/document'
import { Radio, RadioField, RadioGroup } from '@views/components/tw/radio'
import { z } from 'zod'
import { confirmPwdMsg, pwdMsg, pwdVal, req, strMsg } from '@app/utils/zod-custom-error'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mask } from '@app/utils/masks'
import { fetchAddressByZipCode, fetchZipCodeByAddress } from '@app/utils/zip-code'
import { InputPassword } from '@views/components/inputs/password'
import { usersService } from '@app/services/users'

export const schema = z
	.object({
		document: z.string(strMsg('CPF')).min(1, req('CPF')),
		identity: z.string(strMsg('RG')).min(1, req('RG')),
		cref: z.string(strMsg('CREF')).min(1, req('CREF')),
		hourlyClassRate: z.string(strMsg('Valor da hora/aula')).min(1, req('Valor da hora/aula')),
		name: z.string(strMsg('nome')).min(1, req('nome')),
		birthDate: z.string(strMsg('data de nascimento')).min(1, req('data de nascimento')),
		phone: z.string(strMsg('telefone')).min(1, req('telefone')),
		email: z.string(strMsg('e-mail')).email({ message: 'Insira um e-mail válido.' }),
		gender: z.string(strMsg('gênero')).min(1, req('gênero')),

		zipCode: z.string(strMsg('CEP')).min(1, req('CEP')),
		state: z.string(strMsg('estado')).min(1, req('estado')),
		city: z.string(strMsg('cidade')).min(1, req('cidade')),
		neighborhood: z.string(strMsg('bairro')).min(1, req('bairro')),
		street: z.string(strMsg('rua')).min(1, req('rua')),
		number: z.string(strMsg('número')).min(1, req('número')),
		complement: z.string(strMsg('complemento')).optional(),

		instagram: z.string(strMsg('instagram')).optional(),
		facebook: z.string(strMsg('facebook')).optional(),
		twitter: z.string(strMsg('twitter')).optional(),
		otherSocialMedia: z.string(strMsg('outra rede social')).optional(),

		password: z.string(strMsg('senha')).regex(pwdVal, pwdMsg),
		confirmPassword: z.string(strMsg('confirmar senha')).min(1, req('confirmar senha')),
	})
	.refine((data) => data.password === data.confirmPassword, confirmPwdMsg)

type IFormData = z.infer<typeof schema>

export function CreateTeacherPage() {
	const [isPending, setIsPending] = useState(false)

	const {
		watch,
		setFocus,
		setValue,
		register,
		getValues,
		formState: { errors },
		handleSubmit: hookFormHandleSubmit,
	} = useForm<IFormData>({
		resolver: zodResolver(schema),
		mode: 'onSubmit',
		defaultValues: {
			gender: 'male',
		},
	})

	const zipCode = watch('zipCode')
	const gender = watch('gender')

	const handleSubmit = hookFormHandleSubmit(async (formData) => {
		setIsPending(true)
		try {
			console.log('Enviando para a API:', formData)
			await usersService.createUser({ ...formData, role: 'teacher' })
			// Redirecionar ou limpar o formulário após o sucesso
		} catch (error) {
			console.error('Erro ao criar usuário:', error)
		} finally {
			setIsPending(false)
		}
	})

	async function handleZipCodeChange(event: ChangeEvent<HTMLInputElement>) {
		let inputValue = event.target.value.replace(/\D/g, '')
		inputValue = Mask.zipCode(inputValue)
		setValue('zipCode', inputValue)
		if (inputValue.length === 10) {
			try {
				const addressData = await fetchAddressByZipCode(inputValue)
				if (!addressData.erro) {
					setValue('state', addressData.uf)
					setValue('city', addressData.localidade)
					if (addressData.logradouro && addressData.bairro) {
						setValue('neighborhood', addressData.bairro)
						setValue('street', addressData.logradouro)
						setFocus('number')
					} else if (addressData.bairro) {
						setValue('neighborhood', addressData.bairro)
						setFocus('street')
					} else {
						setFocus('neighborhood')
					}
				}
			} catch (error) {
				console.error('Erro ao buscar endereço pelo CEP:', error)
			}
		}
	}
	async function handleAddressFieldsBlur() {
		const city = getValues('city')
		const street = getValues('street')

		if (city && street && !zipCode) {
			try {
				const zipCodeData = await fetchZipCodeByAddress(city, street)
				if (zipCodeData?.[0]?.cep) {
					setValue('zipCode', zipCodeData[0].cep)
				}
			} catch (error) {
				console.error('Erro ao buscar CEP pelo endereço:', error)
			}
		}
	}

	return (
		<Field>
			<Fieldset className="mb-6">
				<Legend className="!text-2xl">Cadastrar professor</Legend>
				<Text className="!mb-6">
					Insira as informações do professor para adicionar ao sistema e gerenciar suas aulas.
				</Text>
				<Divider className="bg-orange-primary" />
			</Fieldset>

			<form onSubmit={handleSubmit}>
				<Fieldset>
					<Legend>Dados pessoais</Legend>
					<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
						<InputDocument
							id="document"
							label="CPF"
							placeholder="000.000.000-00"
							disabled={isPending}
							error={errors?.document?.message}
							{...register('document')}
						/>

						<Input
							id="identity"
							label="Identidade"
							placeholder="UF.99.999.999"
							maxLength={14}
							error={errors.identity?.message}
							{...register('identity')}
						/>
					</Field>

					<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
						<Input
							id="cref"
							label="CREF"
							placeholder="CREF 12345-G/SP"
							disabled={isPending}
							error={errors?.cref?.message}
							{...register('cref')}
						/>

						<Input
							id="hourlyClassRate"
							label="Valor da hora/aula"
							placeholder="R$ 100,00"
							maxLength={14}
							error={errors.hourlyClassRate?.message}
							{...register('hourlyClassRate')}
						/>
					</Field>

					<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
						<Input
							id="Nome"
							label="Nome"
							placeholder="Fulano da Silva"
							error={errors.name?.message}
							{...register('name')}
						/>

						<Input
							id="birthDate"
							label="Data de nascimento"
							placeholder="Ex: 01/01/2000"
							maxLength={10}
							error={errors?.birthDate?.message}
							{...register('birthDate')}
						/>
					</Field>

					<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
						<Input
							id="phone"
							label="Telefone ( WhatsApp )"
							placeholder="+55 (31) 99999-9999"
							maxLength={19}
							error={errors?.phone?.message}
							{...register('phone')}
						/>

						<Input
							id="email"
							label="E-mail"
							placeholder="exemplo@gmail.com"
							error={errors?.email?.message}
							{...register('email')}
						/>
					</Field>

					<Field className="!space-y-0 !w-full !pt-2 sm:!pt-0">
						<Label className="!leading-4">Gênero</Label>
						<RadioGroup
							value={gender}
							defaultValue="male"
							className="flex !items-end sm:!gap-x-4 !flex-col sm:!flex-row !mt-0 sm:!pt-0 !space-y-2 sm:!space-y-0"
						>
							<Button
								outline
								type="button"
								className="!w-full !justify-start !mt-0 !cursor-pointer"
								onClick={() => {
									document.getElementById('male')?.click()
									setValue('gender', 'male')
								}}
							>
								<RadioField>
									<Radio id="male" value="male" {...register('gender')} />
									<Label htmlFor="male" className="!cursor-pointer">
										Masculino
									</Label>
								</RadioField>
							</Button>

							<Button
								outline
								type="button"
								className="!w-full !justify-start !cursor-pointer"
								onClick={() => {
									document.getElementById('female')?.click()
									setValue('gender', 'female')
								}}
							>
								<RadioField>
									<Radio id="female" value="female" {...register('gender')} />
									<Label htmlFor="female" className="!cursor-pointer">
										Feminino
									</Label>
								</RadioField>
							</Button>
						</RadioGroup>
					</Field>
				</Fieldset>

				<Divider className="mb-4 mt-8 bg-orange-primary" />

				<Legend className="!pt-2">Endereço</Legend>
				<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
					<Input
						id="zipCode"
						label="CEP"
						placeholder="00.000-000"
						value={zipCode}
						maxLength={10}
						error={errors?.zipCode?.message}
						{...register('zipCode', {
							onChange: (e) => handleZipCodeChange(e),
						})}
					/>

					<Input
						id="state"
						label="Estado"
						placeholder="MG"
						error={errors?.state?.message}
						{...register('state')}
					/>
				</Field>

				<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
					<Input
						id="city"
						label="Cidade"
						placeholder="Belo Horizonte"
						error={errors?.city?.message}
						{...register('city')}
						onBlur={handleAddressFieldsBlur}
					/>

					<Input
						id="neighborhood"
						label="Bairro"
						placeholder="Sion"
						error={errors?.neighborhood?.message}
						{...register('neighborhood')}
					/>
				</Field>

				<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
					<Input
						id="street"
						label="Rua"
						placeholder="Rua Montes Claros"
						error={errors?.street?.message}
						{...register('street')}
						onBlur={handleAddressFieldsBlur}
					/>

					<Input
						id="number"
						label="Número"
						placeholder="nº 345"
						error={errors?.number?.message}
						{...register('number')}
					/>
				</Field>

				<Input
					id="complement"
					label="Complemento"
					placeholder="Apartamento, bloco, casa, etc."
					error={errors?.complement?.message}
					{...register('complement')}
				/>

				<Divider className="mb-4 mt-8 bg-orange-primary" />

				<Legend className="!pt-2">Redes sociais</Legend>
				<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
					<Input
						id="instagram"
						label="Instagram"
						placeholder="Digite seu instagram"
						error={errors?.instagram?.message}
						{...register('instagram')}
					/>

					<Input
						id="facebook"
						label="Facebook"
						placeholder="Digite seu facebook"
						error={errors?.facebook?.message}
						{...register('facebook')}
					/>
				</Field>

				<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
					<Input
						id="twitter"
						label="Twitter"
						placeholder="Digite seu twitter"
						error={errors?.twitter?.message}
						{...register('twitter')}
					/>

					<Input
						id="otherSocialMedia"
						label="Outra rede social (opcional)"
						placeholder="Digite outra rede social"
						error={errors?.otherSocialMedia?.message}
						{...register('otherSocialMedia')}
					/>
				</Field>

				<Divider className="mb-4 mt-8 bg-orange-primary" />

				<Legend className="!pt-2">Segurança</Legend>
				<Field className="flex space-y-2 sm:space-y-0 sm:space-x-6 !w-full flex-col sm:flex-row !pt-2 sm:!pt-0">
					<InputPassword
						id="password"
						label="Senha"
						placeholder="********"
						disabled={isPending}
						error={errors.password?.message}
						{...register('password')}
					/>

					<InputPassword
						id="confirmPassword"
						label="Confirmar senha"
						placeholder="********"
						disabled={isPending}
						error={errors.confirmPassword?.message}
						{...register('confirmPassword')}
					/>
				</Field>
				<div className="w-full flex justify-end mt-10">
					<Button type="submit" outline className="!-max !bg-orange-primary !text-white">
						Cadastrar
					</Button>
				</div>
			</form>
		</Field>
	)
}
