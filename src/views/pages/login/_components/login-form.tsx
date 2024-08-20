'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState, type ComponentProps } from 'react'
// import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'

import { credentialsLoginAction } from '@/app/auth/login/_actions/credentials-login-action'

import { GoogleLoginBtn } from '@/app/auth/login/_components/google-login-btn'
import { loginSchema, type ILoginFormData } from '@/app/auth/login/_components/schema'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'
import { Label } from '@/components/ui/label'

import { cn } from '@app/utils/cn'

interface UserAuthFormProps extends ComponentProps<'div'> {}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		formState: { errors },
	} = useForm<ILoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	return (
		<div className={cn('grid gap-6 !my-auto', className)} {...props}>
			<form action={credentialsLoginAction}>
				<div className="grid gap-2">
					<div className="grid gap-0.5">
						<Label className="leading-none mb-0 pb-0" htmlFor="email">
							E-mail
						</Label>
						<Input
							id="email"
							placeholder="email@exemplo.com"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
							error={errors.email?.message}
							{...register('email')}
						/>
						<Label className="mt-2" htmlFor="password">
							Senha
						</Label>
						<InputPassword
							id="password"
							placeholder="********"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect="off"
							disabled={isLoading}
							error={errors.password?.message}
							{...register('password')}
						/>
						<Link
							href="/forgot-password"
							className="mb-3 text-sm text-gray900 hover:text-orange500 transition-all focus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange500 focus-visible:ring-offset-2 rounded-md px-1 py-0.5 w-fit mt-1 ml-auto"
						>
							Esqueceu a senha?
						</Link>
					</div>
					<Button type="submit" disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className="mr-2 size-4 animate-spin" />
						)}
						Entrar
					</Button>

					<div className="relative mt-3.5 mb-2.5">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Ou
							</span>
						</div>
					</div>

					{/* <Button
						type="button"
						onClick={async () => {
							setIsLoading(true)
							try {
								await // action
							} finally {
								setIsLoading(false)
							}
						}}
						disabled={isLoading}
						className="mt-1"
					>
						{isLoading ? (
							<Icons.spinner className="mr-2 size-4 animate-spin" />
						) : (
							<EnvelopeIcon className="mr-2 size-5 text-orange500" />
						)}
						Login com E-mail
					</Button> */}

					<GoogleLoginBtn isLoading={isLoading} setIsLoading={setIsLoading} />
				</div>
			</form>
		</div>
	)
}
