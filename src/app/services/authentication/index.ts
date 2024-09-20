import { login } from '@app/services/authentication/login'
import { signUp } from '@app/services/authentication/sign-up'
import { forgotPassword } from '@app/services/authentication/forgot-password'
import { resetPassword } from '@app/services/authentication/reset-password'

export const authenticationsService = {
	login,
	signUp,
	forgotPassword,
	resetPassword,
}
