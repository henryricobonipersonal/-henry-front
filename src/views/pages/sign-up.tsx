import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { authenticationsService } from '@app/services/authentication'
import { parseError } from '@app/services/http-client'

import { Icons } from '@views/components/icons'
import { Button } from '@views/components/tw/button'

import { AuthDivider } from '@views/components/authentication/auth-divider'
import { Input } from '@views/components/inputs'
import { InputDocument } from '@views/components/inputs/document'
import { InputMask } from '@views/components/inputs/mask'
import { InputPassword } from '@views/components/inputs/password'
import { type ISignUpFormData, signUpSchema } from '@views/schemas/sign-up-schema'

export function SignUpPage() {
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit: hookFormHandleSubmit,
	} = useForm<ISignUpFormData>({
		resolver: zodResolver(signUpSchema),
	})

	const { mutateAsync: signUp, isPending } = useMutation({
		mutationFn: async (data: ISignUpFormData) => {
			return authenticationsService.signUp(data)
		},
	})

	const handleSubmit = hookFormHandleSubmit(async (params: ISignUpFormData) => {
		toast.promise(signUp(params), {
			loading: 'Carregando...',
			success: (data) => {
				navigate('/login', { replace: true, state: { email: data.user.email } })
				return 'Cadastro realizado com sucesso!'
			},
			error(error) {
				return parseError(error)?? 'Erro ao realizar cadastro.'
			},
		})
	})

	return (
		<div className="p-4 lg:p-8 dark:bg-zinc-900">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<img src="/logo.png" className="z-20 mx-auto h-32" alt="Logo henry ricoboni" />
				</div>
				<div className="grid gap-6 !my-auto">
					<form onSubmit={handleSubmit}>
						<div className="grid gap-2">
							<div className="grid gap-0.5">
								<InputDocument
									label="CPF"
									placeholder="000.000.000-00"
									disabled={isPending}
									error={errors.document?.message}
									{...register('document')}
								/>

								<InputMask
									label="Telefone"
									placeholder="+55 (99) 99999-9999"
									mask={'+55 (99) 99999-9999'}
									disabled={isPending}
									error={errors.phone?.message}
									{...register('phone')}
								/>

								<Input
									type="email"
									label="E-mail"
									placeholder="email@exemplo.com"
									disabled={isPending}
									error={errors.email?.message}
									{...register('email')}
								/>

								<Input
									label="Nome"
									placeholder="nome completo"
									disabled={isPending}
									error={errors.name?.message}
									{...register('name')}
								/>

								<Input
									label="Data de nascimento"
									placeholder="dd/mm/aaaa"
									// mask={'99/99/9999'}
									disabled={isPending}
									error={errors.birthDate?.message}
									{...register('birthDate')}
								/>

								<InputPassword
									id="password"
									label="Senha"
									placeholder="********"
									disabled={isPending}
									error={errors.password?.message}
									{...register('password')}
								/>
							</div>

							<Button type="submit" disabled={isPending} className="mt-4">
								{isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
								Criar conta
							</Button>
						</div>
					</form>

					<AuthDivider text="Já tem uma conta?" />

					<Link to="/login" className="w-full focus-within:outline-none">
						<Button outline type="button" disabled={isPending} className="w-full">
							{isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
							Fazer login
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
