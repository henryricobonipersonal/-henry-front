import { httpClient } from '@app/services/http-client'

interface Params {
	pageIndex: number
	role?: string
	perPage?: number
}

export interface IUser {
	id: string
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
	createdAt: string
}

interface IResponse {
	users: IUser[]
	meta: {
		pageIndex: number
		perPage: number
		totalCount: number
	}
}

export async function findManyUsers({ pageIndex, role, perPage }: Params): Promise<IResponse> {
	const { data } = await httpClient.get('/users', {
		params: {
			pageIndex,
			...(role && { role }),
			...(perPage && { perPage }),
		},
	})

	return {
		users: data.map((user: IUser) => ({
			document: user.document,
			identity: user.identity,
			cref: user.cref,
			hourlyClassRate: user.hourlyClassRate,
			name: user.name,
			birthDate: user.birthDate,
			phone: user.phone,
			email: user.email,
			gender: user.gender,
			zipCode: user.zipCode,
			state: user.state,
			city: user.city,
			neighborhood: user.neighborhood,
			street: user.street,
			number: user.number,
			complement: user.complement,
			role: user.role,
			instagram: user.instagram,
			facebook: user.facebook,
			twitter: user.twitter,
			otherSocialMedia: user.otherSocialMedia,
		})),
		meta: {
			pageIndex: data.pageIndex,
			perPage: data.perPage,
			totalCount: data.totalCount,
		},
	}
}
