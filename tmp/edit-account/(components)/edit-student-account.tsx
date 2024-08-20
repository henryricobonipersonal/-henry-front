'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useAuth } from '@/contexts/use-auth'
import { cn } from '@/utils/cn'
import { strMessage } from '@/utils/custom-error'

const schema = z
	.object({
		name: z.string(strMessage('nome')).min(1, 'O campo nome é obrigatório.'),
		phone: z
			.string(strMessage('telefone'))
			.min(1, 'O campo telefone é obrigatório.'),
		birthDate: z
			.string(strMessage('data de nascimento'))
			.min(1, 'O campo data de nascimento é obrigatório.'),
		document: z.string(strMessage('CPF')).min(1, 'O campo CPF é obrigatório.'),
		identity: z.string(strMessage('RG')).min(1, 'O campo RG é obrigatório.'),
		gender: z.string(strMessage('sexo')).min(1, 'O campo sexo é obrigatório.'),
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
		email: z.string(strMessage('email')).min(1, 'O campo email é obrigatório.'),
		password: z.string(strMessage('senha')).optional(),
		confirmPassword: z.string(strMessage('confirmar senha')).optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não conferem',
		path: ['confirmPassword'],
	})

type IEditStudentAccountFormData = z.infer<typeof schema>

export function EditStudentAccountForm() {
	const { userType } = useAuth()

	const {
		register,
		control,
		formState: { errors },
	} = useForm<IEditStudentAccountFormData>({
		resolver: zodResolver(schema),
	})

	return (
		<form
			id="edit-student-account-form"
			className={cn('mt-6', userType !== 'student' && 'hidden')}
		>
			<p className="text-gray900 font-semibold mb-2 mt-6">Contato</p>
			<div className="flex gap-4 w-full justify-start">
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
			<div className="flex gap-5">
				<Input
					placeholder="Insira a data de nascimento *"
					error={errors?.birthDate?.message}
					{...register('birthDate')}
				/>
				<Input
					placeholder="Insira o CPF *"
					error={errors?.document?.message}
					{...register('document')}
				/>
				<Input
					placeholder="Insira o RG *"
					error={errors?.identity?.message}
					{...register('identity')}
				/>
			</div>
			<Controller
				control={control}
				name="gender"
				render={({ field }) => (
					<RadioGroup
						onValueChange={field.onChange}
						defaultValue="feminino"
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
			<p className="text-gray900 font-semibold mb-2 mt-6">E-mail de login</p>
			<div className="flex gap-5 mb-5">
				<Input
					placeholder="Insira o e-mail *"
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
