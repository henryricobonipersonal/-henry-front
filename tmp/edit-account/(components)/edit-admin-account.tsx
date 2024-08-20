'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/use-auth'
import { cn } from '@/utils/cn'
import { strMessage } from '@/utils/custom-error'

const schema = z
	.object({
		name: z.string(strMessage('nome')).min(1, 'O campo nome é obrigatório.'),
		phone: z
			.string(strMessage('telefone'))
			.min(1, 'O campo telefone é obrigatório.'),
		cref: z.string(strMessage('CREF')).min(1, 'O campo CREF é obrigatório.'),
		document: z.string(strMessage('CPF')).min(1, 'O campo CPF é obrigatório.'),
		identity: z.string(strMessage('RG')).min(1, 'O campo RG é obrigatório.'),
		email: z.string(strMessage('email')).min(1, 'O campo email é obrigatório.'),
		password: z.string(strMessage('senha')).optional(),
		confirmPassword: z.string(strMessage('confirmar senha')).optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não conferem',
		path: ['confirmPassword'],
	})

type IEditAdminAccountFormData = z.infer<typeof schema>

export function EditAdminAccountForm() {
	const { userType } = useAuth()

	const {
		register,
		formState: { errors },
	} = useForm<IEditAdminAccountFormData>({
		resolver: zodResolver(schema),
	})

	return (
		<form
			id="edit-admin-account-form"
			className={cn('mt-6', userType !== 'admin' && 'hidden')}
		>
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
			<div className="flex gap-5">
				<Input
					placeholder="Insira o CREF *"
					error={errors?.cref?.message}
					{...register('cref')}
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
