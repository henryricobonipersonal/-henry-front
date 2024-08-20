import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

import { signIn } from '@/auth/index'

import { loginSchema } from '@/app/auth/login/_components/schema'

export async function credentialsLoginAction(formData: FormData) {
	const data = Object.fromEntries(formData)

	const parsedData = loginSchema.safeParse(data)

	if (!parsedData.success) {
		return {
			status: 'error',
			body: {
				message: parsedData.error.issues,
			},
		}
	}

	const { email, password } = parsedData.data

	try {
		await signIn('credentials', {
			email,
			password,
		})
	} catch (error) {
		if (error instanceof AuthError) {
			toast.error(error.type)
		}
		return {
			status: 'error',
			body: {
				message: error,
			},
		}
	}

	redirect('/dashboard')
}
