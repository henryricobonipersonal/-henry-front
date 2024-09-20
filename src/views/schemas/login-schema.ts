import { z } from "zod"

export const loginSchema = z.object({
	email: z
		.string({
			required_error: 'O campo e-mail é obrigatório.',
			invalid_type_error: 'O campo e-mail deve ser preenchido por uma palavra.',
		})
		.email('O campo e-mail é inválido.')
		.min(1, { message: 'O campo e-mail é obrigatório.' }),
	password: z
		.string({
			required_error: 'O campo senha é obrigatório.',
			invalid_type_error: 'O campo senha deve ser preenchido por uma palavra.',
		})
		.regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
			message:
				'O campo senha deve conter ao menos uma letra maiúscula, uma minúscula, um número, um caractere especial e no mínimo 8 caracteres.',
		}),
})

export type ILoginFormData = z.infer<typeof loginSchema>