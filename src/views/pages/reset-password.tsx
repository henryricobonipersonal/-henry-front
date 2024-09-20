import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { authenticationsService } from '@app/services/authentication'

import { Icons } from '@views/components/icons'
import { InputPassword } from '@views/components/inputs/password'
import { Button } from '@views/components/tw/button'
import { AuthDivider } from '@views/components/authentication/auth-divider'
import { ForgotPasswordHeader } from '@views/components/authentication/forgot-password-header'
import { type IResetPasswordFormData, resetPasswordSchema } from '@views/schemas/reset-password-schema'



export function ResetPasswordPage() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const token = searchParams.get('token')
	const code = searchParams.get('code')

	const {
		register,
		formState: { errors },
		handleSubmit: hookFormHandleSubmit,
	} = useForm<IResetPasswordFormData>({
		resolver: zodResolver(resetPasswordSchema),
	})

	const { mutateAsync: authenticate, isPending } = useMutation({
		mutationFn: async (data: IResetPasswordFormData) => {
			if (!token) {
				toast.error('O token é obrigatório.')
				navigate('/login', { replace: true })
				return
			}

			if (!code) {
				toast.error('O código é obrigatório.')
				navigate('/login', { replace: true })
				return
			}

			return authenticationsService.resetPassword({
				token: token,
				code: code,
				password: data.password,
			})
		},
	})

	const handleSubmit = hookFormHandleSubmit(
		async (params: IResetPasswordFormData) => {
			toast.promise(authenticate(params), {
				loading: 'Carregando...',
				success: () => {
					navigate('/login', { replace: true })
					return 'Senha alterada com sucesso! Faça login para continuar.'
				},
				error: 'Senha inválida. Tente novamente.',
			})
		},
	)

	return (
		<div className="p-4 lg:p-8 dark:bg-zinc-900">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<ForgotPasswordHeader />

				<div className="grid gap-6 !my-auto mt-4">
					<form onSubmit={handleSubmit}>
						<div className="grid gap-2">
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

							<Button type="submit" disabled={isPending} className="mt-4">
								{isPending && (
									<Icons.spinner className="mr-2 size-4 animate-spin" />
								)}
								Redefinir
							</Button>
						</div>
					</form>

					<AuthDivider text="Lembrou a senha?" />

					<Link to="/login" className="w-full focus-within:outline-none">
						<Button
							outline
							type="button"
							disabled={isPending}
							className="w-full"
						>
							{isPending && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							Fazer login
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
