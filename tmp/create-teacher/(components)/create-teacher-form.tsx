'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

import { boolMessage, strMessage } from '@/utils/custom-error'

const schema = z
	.object({
		name: z.string(strMessage('nome')).min(3, 'O campo nome é obrigatório.'),
		price: z
			.string(strMessage('preço'))
			.min(1, 'O campo preço é obrigatório.')
			.transform((value) => {
				return Number.parseFloat(value.replace(',', '.'))
			}),
		phone: z
			.string(strMessage('telefone'))
			.min(1, 'O campo telefone é obrigatório.'),
		cref: z.string(strMessage('CREF')).min(1, 'O campo CREF é obrigatório.'),
		document: z.string(strMessage('CPF')).min(1, 'O campo CPF é obrigatório.'),
		identity: z.string(strMessage('RG')).min(1, 'O campo RG é obrigatório.'),
		email: z.string(strMessage('e-mail')).email('Insira um e-mail válido.'),
		password: z
			.string(strMessage('senha'))
			.min(8, 'O campo senha deve ter no mínimo 6 caracteres.'),
		confirmPassword: z
			.string(strMessage('confirmar senha'))
			.min(8, 'O campo confirmar senha deve ter no mínimo 8 caracteres.'),
		permissionSchedule: z.boolean(boolMessage('acesso a agenda')),
		permissionChekinStudent: z.boolean(
			boolMessage('realizar check-in dos alunos'),
		),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não conferem',
		path: ['confirmPassword'],
	})

type ICreateTeacherFormData = z.infer<typeof schema>

export function CreateTeacherForm() {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ICreateTeacherFormData>({
		resolver: zodResolver(schema),
	})

	function handleNewTeacher(data: ICreateTeacherFormData) {
		console.log(data)
	}

	return (
		<form id="create-teacher-form" onSubmit={handleSubmit(handleNewTeacher)}>
			<p className="text-gray900 font-semibold mb-2 mt-6">Contato</p>
			<div className="flex gap-5 flex-wrap">
				<Input
					placeholder="Insira o nome completo *"
					type="text"
					error={errors.name?.message}
					{...register('name')}
				/>
				<Input
					placeholder="Insira o valor aula/h *"
					type="text"
					error={errors.price?.message}
					{...register('price')}
				/>
			</div>
			<div className="flex gap-5 mt-4">
				<Input
					placeholder="Insira o telefone *"
					error={errors.phone?.message}
					{...register('phone')}
				/>
			</div>
			<p className="text-gray900 font-semibold mb-2 mt-6">Dados Pessoais</p>
			<div className="flex gap-5 flex-wrap">
				<Input
					placeholder="Insira o CREF *"
					error={errors.cref?.message}
					{...register('cref')}
				/>
				<Input
					placeholder="Insira o CPF *"
					error={errors.document?.message}
					{...register('document')}
				/>
				<Input placeholder="Insira o RG *" {...register('identity')} />
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
			<p className="text-gray900 font-semibold mb-2 mt-6">Permissões</p>
			<div className="flex flex-wrap gap-8">
				<div className="flex items-center space-x-2">
					<Switch
						id="access-appointment"
						// error={errors.permissionSchedule?.message}
						{...register('permissionSchedule')}
						onCheckedChange={(value) => setValue('permissionSchedule', value)}
					/>
					<label htmlFor="access-appointment" className="text-sm">
						Acesso a agenda
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<Switch
						id="allow-check-in"
						// error={errors.permissionChekinStudent?.message}
						{...register('permissionChekinStudent')}
						onCheckedChange={(value) =>
							setValue('permissionChekinStudent', value)
						}
					/>
					<label htmlFor="allow-check-in" className="text-sm">
						Realizar check-in dos alunos
					</label>
				</div>
			</div>
		</form>
	)
}
