export function strMsg(field: string) {
	return {
		required_error: `O campo ${field} é obrigatório.`,
		invalid_type_error: `O campo ${field} deve ser preenchido por uma palavra.`,
	}
}

export function numbMsg(field: string) {
	return {
		required_error: `O campo ${field} é obrigatório.`,
		invalid_type_error: `O campo ${field} deve ser preenchido por um número.`,
	}
}

export function dateMsg(field: string) {
	return {
		required_error: `O campo ${field} é obrigatório.`,
		invalid_type_error: `O campo ${field} deve ser preenchido por uma data.`,
	}
}

export function boolMsg(field: string) {
	return {
		required_error: `O campo ${field} é obrigatório.`,
		invalid_type_error: `O campo ${field} deve ser preenchido por verdadeiro ou falso.`,
	}
}

export function req(field: string) {
	return `O campo ${field} é obrigatório.`
}

export const pwdVal = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
export const pwdMsg = {
	message:
		'A senha deve conter ao menos uma letra maiúscula, uma minúscula, um número, um caractere especial e no mínimo 8 caracteres.',
}
export const confirmPwdMsg = {
	message: 'As senhas não coincidem.',
	path: ['confirmPassword'],
}
