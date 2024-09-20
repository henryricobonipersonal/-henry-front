import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { authenticationsService } from '@app/services/authentication'

import { Icons } from '@views/components/icons'
import { Input } from '@views/components/inputs'
import { InputDocument } from '@views/components/inputs/document'
import { Button } from '@views/components/tw/button'
import { ForgotPasswordHeader } from '@views/components/authentication/forgot-password-header'
import { ForgotPasswordTab } from '@views/components/authentication/forgot-password-tab'
import { AuthDivider } from '@views/components/authentication/auth-divider'
import { type IForgotPasswordFormData, forgotPasswordSchema } from '@views/schemas/forgot-password-schema'

type TabProps = 'document' | 'email'



export function ForgotPasswordPage() {
	const navigate = useNavigate()
	const location = useLocation()
	const [currentTab, setCurrentTab] = useState<TabProps>('email')

	const {
		reset,
		register,
		formState: { errors },
		handleSubmit: hookFormHandleSubmit,
	} = useForm<IForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: location?.state?.email ?? '',
		},
	})

	const { mutateAsync: authenticate, isPending } = useMutation({
		mutationFn: async (data: IForgotPasswordFormData) => {
			return authenticationsService.forgotPassword(data)
		},
	})

	const handleSubmit = hookFormHandleSubmit(
		async (params: IForgotPasswordFormData) => {
			toast.promise(authenticate(params), {
				loading: 'Carregando...',
				success: () => {
					navigate('/login', { replace: true })
					return 'Enviamos um link de recuperação de senha para o seu e-mail.'
				},
				error: 'Usuário não encontrado.',
			})
		},
	)

	return (
		<div className="p-4 lg:p-8 dark:bg-zinc-900">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<ForgotPasswordHeader />

				<div className="-mt-4">
					<ForgotPasswordTab
						currentTab={currentTab}
						setCurrentTab={setCurrentTab}
						reset={reset}
					/>
				</div>

				<div className="grid gap-6 !my-auto mt-4">
					<form onSubmit={handleSubmit}>
						<div className="grid gap-2">
							{currentTab === 'email' && (
								<Input
									type="email"
									label="E-mail"
									placeholder="email@exemplo.com"
									disabled={isPending}
									error={errors.email?.message}
									{...register('email')}
								/>
							)}

							{currentTab === 'document' && (
								<InputDocument
									label="CPF"
									placeholder="000.000.000-00"
									disabled={isPending}
									error={errors.document?.message}
									{...register('document')}
								/>
							)}

							<Button type="submit" disabled={isPending} className="mt-4">
								{isPending && (
									<Icons.spinner className="mr-2 size-4 animate-spin" />
								)}
								Recuperar
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
