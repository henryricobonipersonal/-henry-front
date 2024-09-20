import { httpClient } from '@app/services/http-client'

interface Params {
	id: string
}

interface Response {
	document: string
	identity: string
	cref?: string
	hourlyClassRate?: string
	name: string
	birthDate: string
	phone: string
	email: string
	gender: string

	zipCode: string
	state: string
	city: string
	neighborhood: string
	street: string
	number: string
	complement?: string

	instagram?: string
	facebook?: string
	twitter?: string
	otherSocialMedia?: string

	role: string
}

export async function findUser({ id }: Params): Promise<Response> {
	const { data } = await httpClient.get(`/users/${id}`)

	return {
		document: data.document,
		identity: data.identity,
		cref: data.cref,
		hourlyClassRate: data.hourlyClassRate,
		name: data.name,
		birthDate: data.birthDate,
		phone: data.phone,
		email: data.email,
		gender: data.gender,
		zipCode: data.zipCode,
		state: data.state,
		city: data.city,
		neighborhood: data.neighborhood,
		street: data.street,
		number: data.number,
		complement: data.complement,
		instagram: data.instagram,
		facebook: data.facebook,
		twitter: data.twitter,
		otherSocialMedia: data.otherSocialMedia,
		role: data.role,
	}
}
