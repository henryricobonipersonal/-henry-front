'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { strMessage } from '@/utils/custom-error'
import { useCreateStudent } from '@/hooks/students/use-create-student'
import { toast } from 'sonner'
import { type AppError, parseError } from '@/services/http-client'

const schema = z
	.object({
		name: z.string(strMessage('nome')).min(3, 'O campo nome é obrigatório.'),
		gender: z
			.string(strMessage('gênero'))
			.min(1, 'O campo gênero é obrigatório.'),
		phone: z
			.string(strMessage('telefone'))
			.min(1, 'O campo telefone é obrigatório.'),
		birthDate: z
			.string(strMessage('data de nascimento'))
			.min(1, 'O campo data de nascimento é obrigatório.'),
		document: z.string(strMessage('CPF')).min(1, 'O campo CPF é obrigatório.'),
		identity: z.string(strMessage('RG')).min(1, 'O campo RG é obrigatório.'),
		zipCode: z.string(strMessage('CEP')).min(1, 'O campo CEP é obrigatório.'),
		state: z
			.string(strMessage('estado'))
			.min(1, 'O campo estado é obrigatório.'),
		city: z
			.string(strMessage('cidade'))
			.min(1, 'O campo cidade é obrigatório.'),
		neighborhood: z
			.string(strMessage('bairro'))
			.min(1, 'O campo bairro é obrigatório.'),
		street: z.string(strMessage('rua')).min(1, 'O campo rua é obrigatório.'),
		number: z
			.string(strMessage('número'))
			.min(1, 'O campo número é obrigatório.'),
		complement: z.string(strMessage('complemento')).optional(),
		instagram: z.string(strMessage('instagram')).optional(),
		facebook: z.string(strMessage('facebook')).optional(),
		twitter: z.string(strMessage('twitter')).optional(),
		otherSocialNetwork: z.string(strMessage('outra rede social')).optional(),
		email: z.string(strMessage('e-mail')).email('Insira um e-mail válido.'),
		password: z
			.string(strMessage('senha'))
			.min(8, 'O campo senha deve ter no mínimo 8 caracteres.'),
		confirmPassword: z
			.string(strMessage('confirmar senha'))
			.min(8, 'O campo confirmar senha deve ter no mínimo 8 caracteres.'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não conferem',
		path: ['confirmPassword'],
	})

type FormData = z.infer<typeof schema>

export function CreateStudentForm() {
	const { createStudent } = useCreateStudent() // Criar um hook de create próprio

	const {
		handleSubmit: hookFormHandleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const handleSubmit = hookFormHandleSubmit(
		async ({
			name,
			birthDate,
			city,
			confirmPassword,
			document,
			email,
			gender,
			identity,
			neighborhood,
			number,
			password,
			phone,
			state,
			street,
			zipCode,
			complement,
			facebook,
			instagram,
			otherSocialNetwork,
			twitter,
		}: FormData) => {
			try {
				await createStudent({			name,
          birthDate,
          city,
          confirmPassword,
          document,
          email,
          gender,
          identity,
          neighborhood,
          number,
          password,
          phone,
          state,
          street,
          zipCode,
          complement,
          facebook,
          instagram,
          otherSocialNetwork,
          twitter,}) // passar os dados do formulário desestruturados
			} catch (error) {
				toast.error(parseError(error as AppError))
			}
		},
	)

	return (
		<form id="create-student-form" onSubmit={hookFormHandleSubmit}>
			<p className="text-gray900 font-semibold mb-2 mt-6">Contato</p>
			<div className="flex gap-5">
				<Input
					placeholder="Insira o nome completo *"
					error={errors?.name?.message}
					{...register('name')}
				/>
				<Input
					placeholder="Insira o telefone *"
					error={errors?.phone?.message}
					{...register('phone')}
				/>
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados Pessoais</p>
			<div className="flex gap-5 flex-wrap">
				<div className="flex w-full gap-x-4">
					<Input
						placeholder="Insira o CPF *"
						className="max-w-lg"
						error={errors?.document?.message}
						{...register('document')}
					/>
					<Input
						placeholder="Insira o RG *"
						className="max-w-lg"
						error={errors?.identity?.message}
						{...register('identity')}
					/>
				</div>
				<Input
					placeholder="Insira a data de nascimento *"
					error={errors?.birthDate?.message}
					{...register('birthDate')}
				/>
			</div>
			<Controller
				control={control}
				name="gender"
				render={({ field }) => (
					<RadioGroup
						onValueChange={field.onChange}
						defaultValue="female"
						className="flex mt-5 mb-8 items-end"
					>
						<div>
							<p className="text-sm mb-2 font-medium">Sexo:</p>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="female" />
								<Label htmlFor="female">Feminino</Label>
							</div>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="male" />
							<Label htmlFor="male">Masculino</Label>
						</div>
					</RadioGroup>
				)}
			/>
			<p className="text-gray900 font-semibold mb-2 mt-6">Endereço</p>
			<div className="flex gap-5 flex-wrap">
				<div className="w-full flex gap-x-4">
					<Input
						placeholder="Insira o CEP *"
						className="max-w-lg"
						error={errors?.zipCode?.message}
						{...register('zipCode')}
					/>
					<Input
						placeholder="Insira o estado *"
						className="max-w-lg"
						error={errors?.state?.message}
						{...register('state')}
					/>
				</div>
				<div className="flex w-full gap-x-4">
					<Input
						placeholder="Insira a cidade *"
						className="max-w-lg"
						error={errors?.city?.message}
						{...register('city')}
					/>
					<Input
						placeholder="Insira o bairro *"
						className="max-w-lg"
						error={errors?.neighborhood?.message}
						{...register('neighborhood')}
					/>
				</div>
				<div className="flex w-full gap-x-4">
					<Input
						placeholder="Insira a rua *"
						className="max-w-lg"
						error={errors?.street?.message}
						{...register('street')}
					/>
					<Input
						placeholder="Insira o número *"
						className="max-w-lg"
						error={errors?.number?.message}
						{...register('number')}
					/>
				</div>
				<Input
					placeholder="Insira o complemento ( opcional )"
					className="w-full max-w-5xl"
					error={errors?.complement?.message}
					{...register('complement')}
				/>
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Redes Sociais</p>
			<div className="flex flex-wrap gap-5">
				<Input
					placeholder="Insira o instagram ( opicional )"
					error={errors?.password?.message}
					{...register('password')}
				/>
				<Input
					placeholder="Insira o facebook ( opicional )"
					error={errors?.password?.message}
					{...register('password')}
				/>
				<Input
					placeholder="Insira o twitter ( opicional )"
					error={errors?.password?.message}
					{...register('password')}
				/>
				<Input
					placeholder="Insira outras redes sociais ( opcional )"
					error={errors?.otherSocialNetwork?.message}
					{...register('otherSocialNetwork')}
				/>
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados para Login</p>
			<div className="flex gap-5 mb-5">
				<Input
					placeholder="Insira o email *"
					type="email"
					error={errors?.email?.message}
					{...register('email')}
				/>
			</div>
			<div className="flex gap-5">
				<Input
					placeholder="Insira a senha ( opcional )"
					error={errors?.password?.message}
					{...register('password')}
				/>
				<Input
					placeholder="Por favor confirme a senha"
					error={errors?.confirmPassword?.message}
					{...register('confirmPassword')}
				/>
			</div>
		</form>
	)
}
