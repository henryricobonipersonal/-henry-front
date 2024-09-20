import { httpClient } from '@app/services/http-client'

interface Params {
	id: string
	cref?: string
	hourlyClassRate?: string
	phone?: string
	email?: string
	gender?: string

	zipCode?: string
	state?: string
	city?: string
	neighborhood?: string
	street?: string
	number?: string
	complement?: string

	instagram?: string
	facebook?: string
	twitter?: string
	otherSocialMedia?: string
}

export async function updateUser({
		id,
		cref,
		hourlyClassRate,
		phone,
		email,
		gender,
		zipCode,
		state,
		city,
		neighborhood,
		street,
		number,
		complement,
		instagram,
		facebook,
		twitter,
		otherSocialMedia,
	}: Params): Promise<void> {
		await httpClient.put(`/users/${id}`, {
			cref,
			hourlyClassRate,
			phone,
			email,
			gender,
			zipCode,
			state,
			city,
			neighborhood,
			street,
			number,
			complement,
			instagram,
			facebook,
			twitter,
			otherSocialMedia,
		})
	}
