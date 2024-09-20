import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { useAuth } from '@app/hooks/use-auth'

import { Icons } from '@views/components/icons'
import { Button } from '@views/components/tw/button'

import { Input } from '@views/components/inputs'
import { InputPassword } from '@views/components/inputs/password'

import { GoogleButton } from '@views/components/authentication/google-button'
import { type ILoginFormData, loginSchema } from '@views/schemas/login-schema'

export function LoginPage() {
	const { signIn } = useAuth()
	const navigate = useNavigate()
	const location = useLocation()

	const [isPending, setIsPending] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit: hookFormHandleSubmit,
	} = useForm<ILoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: location?.state?.email ?? '',
		},
	})

	const { mutateAsync: authenticate } = useMutation({
		mutationFn: async ({ email, password }: ILoginFormData) => {
			return signIn({ email, password })
		},
	})

	const handleSubmit = hookFormHandleSubmit(async (params: ILoginFormData) => {
		try {
			await authenticate(params)
			navigate('/', { replace: true })
			toast.success('Seja bem-vindo(a)!')
		} catch (error) {
			console.log('Error:', error)

			toast.error('Erro ao realizar login.')
		}
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
								<Input
									id="email"
									type="email"
									label="E-mail"
									placeholder="email@exemplo.com"
									disabled={isPending}
									error={errors.email?.message}
									{...register('email')}
								/>

								<InputPassword
									id="password"
									label="Senha"
									placeholder="********"
									disabled={isPending}
									error={errors.password?.message}
									{...register('password')}
								/>

								<Link
									to="/forgot-password"
									className="focus-visible:ring-1 mb-3 p-1 px-1.5 focus-visible:outline-none !focus-visible:border-none dark:text-white select-none text-base/6 text-zinc-950 sm:text-sm/6 rounded-md ml-auto focus-visible:ring-orange-primary transition-all"
								>
									<p>Esqueceu a senha?</p>
								</Link>
							</div>

							<Button type="submit" disabled={isPending}>
								{isPending && <Icons.spinner className="mr-2 size-4 animate-spin" />}
								Entrar
							</Button>

							<GoogleButton isLoading={isPending} setIsLoading={setIsPending} />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
