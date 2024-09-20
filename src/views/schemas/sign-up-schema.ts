import { z } from "zod"

export const signUpSchema = z.object({
	document: z
		.string({
			required_error: 'O campo CPF é obrigatório.',
			invalid_type_error: 'O campo CPF deve ser preenchido por uma palavra.',
		})
		.min(11, {
			message: 'O campo CPF deve conter 11 caracteres.',
		})
		.max(14, {
			message: 'O campo CPF deve conter 11 caracteres.',
		})
		.regex(/^[0-9.\-/]+$/, {
			message: 'O campo CPF deve conter apenas números.',
		}),
	name: z
		.string({
			required_error: 'O campo nome é obrigatório.',
			invalid_type_error: 'O campo nome deve ser preenchido por uma palavra.',
		})
		.min(1, { message: 'O campo nome é obrigatório.' }),
	birthDate: z
		.string({
			required_error: 'O campo data de nascimento é obrigatório.',
			invalid_type_error:
				'O campo data de nascimento deve ser preenchido por uma palavra.',
		})
		.min(1, { message: 'O campo data de nascimento é obrigatório.' }),
	email: z
		.string({
			required_error: 'O campo e-mail é obrigatório.',
			invalid_type_error: 'O campo e-mail deve ser preenchido por uma palavra.',
		})
		.email('O campo e-mail é inválido.')
		.min(1, { message: 'O campo e-mail é obrigatório.' }),
	phone: z
		.string({
			required_error: 'O campo telefone é obrigatório.',
			invalid_type_error:
				'O campo telefone deve ser preenchido por uma palavra.',
		})
		.min(14, { message: 'O campo telefone deve conter 14 caracteres.' })
		.max(19, { message: 'O campo telefone deve conter 14 caracteres.' })
		.transform((value) => value.replace(/[^0-9+]/g, '')),
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

export type ISignUpFormData = z.infer<typeof signUpSchema>