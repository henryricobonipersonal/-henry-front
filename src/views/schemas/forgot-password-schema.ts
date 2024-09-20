import { z } from 'zod'

export const forgotPasswordSchema = z.object({
	email: z
		.string({
			required_error: 'O campo e-mail é obrigatório.',
			invalid_type_error: 'O campo e-mail deve ser preenchido por uma palavra.',
		})
		.optional()
		.refine(
			(data) => data === '' || z.string().email().safeParse(data).success,
			{
				message: 'O e-mail é inválido',
			},
		),
	document: z
		.string({
			required_error: 'O campo CPF é obrigatório.',
			invalid_type_error: 'O campo CPF deve ser preenchido por uma palavra.',
		})
		.min(14, { message: 'O campo CPF deve ter 11 caracteres.' })
		.regex(/^[0-9.-]+$/, {
			message: 'O campo CPF deve conter apenas números.',
		})
		.optional(),
})

export type IForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
