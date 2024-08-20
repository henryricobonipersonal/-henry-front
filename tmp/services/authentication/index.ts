import { forgotPassword } from '@/services/authentication/forgot-password'
import { resetPassword } from '@/services/authentication/reset-password'
import { signIn } from '@/services/authentication/sign-in'

export const authenticationsService = {
	signIn,
	forgotPassword,
	resetPassword,
}
