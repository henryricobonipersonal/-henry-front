import { httpClient } from '@app/services/http-client'
import { Format } from '@app/utils/format'

interface Params {
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

	password: string
	role: string
}

export async function createUser({
	document,
	identity,
	cref,
	hourlyClassRate,
	name,
	birthDate,
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
	password,
	role,
}: Params): Promise<void> {
	console.log('createUser', role);
	
	try {
		
		await httpClient.post('/users', {
			document: document.replace(/\D/g, ''),
			identity,
			cref,
			hourlyClassRate,
			name,
			birthDate: Format.formatIso(birthDate),
			phone: `+${phone.replace(/\D/g, '')}`,
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
			password,
			role,
		})
	} catch (error) {
		console.log('error', error);
		
	}
	
}
