import { httpClient } from '@app/services/http-client'
import { getCookie } from '@app/utils/get-cookie'

export interface Params {
	email: string
	password: string
}

export interface Response {
		accessToken: string
		user: {
			id: string
			name: string
			document: string
			rg: string
			email: string
			phone: string
			gender: string
			birthDate: string
			role: string
			status: string
			createdAt: string
		}
	}

export async function login({ email, password }: Params): Promise<Response> {
	const { data } = await httpClient.post<Response>('/users/sessions', {
		email,
		password,
	})

	const accessToken = getCookie('accessToken')



	return {
		accessToken: accessToken as string,
		user: {
			id: data.user.id,
			name: data.user.name,
			document: data.user.document,
			rg: data.user.rg,
			email: data.user.email,
			phone: data.user.phone,
			gender: data.user.gender,
			birthDate: data.user.birthDate,
			role: data.user.role,
			status: data.user.status,
			createdAt: data.user.createdAt,
		},
	}
}
