import { z } from "zod"

export const resetPasswordSchema = z
	.object({
		password: z
			.string(
				{
					required_error: 'O campo senha é obrigatório.',
					invalid_type_error:
						'O campo senha deve ser preenchido por uma palavra.',
				},
			)
			.regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
				message:
					'A senha deve conter ao menos uma letra maiúscula, uma minúscula, um número, um caractere especial e no mínimo 8 caracteres.',
			}),
		confirmPassword: z.string(
			{
				required_error: 'O campo confirmar senha é obrigatório.',
				invalid_type_error:
					'O campo confirmar senha deve ser preenchido por uma palavra.',
			},
		),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não coincidem.',
		path: ['confirmPassword'],
	})

export type IResetPasswordFormData = z.infer<typeof resetPasswordSchema>