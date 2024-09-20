import { httpClient } from '@app/services/http-client'

export interface Params {
	document: string
	name: string
	email: string
	phone: string
	birthDate: string
	password: string
}

export interface Response {
	user: {
		id: string
		document: string
		name: string
		birthDate: string
		email: string
		phone: string
		createdAt: string
	}
}

export async function signUp({
	name,
	email,
	phone,
	birthDate,
	document,
	password,
}: Params): Promise<Response> {
	const [day, month, year] = birthDate.split('/').map(Number)

	const { data } = await httpClient.post<Response>('/users', {
		document: document.replace(/\D/g, ''),
		name,
		birthDate: new Date(year, month - 1, day).toISOString(),
		email,
		phone: phone.replace(/[^0-9+]/g, ''),
		password,
	})

	return {
		user: {
			id: data.user.id,
			document: data.user.document,
			name: data.user.name,
			birthDate: data.user.birthDate,
			email: data.user.email,
			phone: data.user.phone,
			createdAt: data.user.createdAt,
		},
	}
}
