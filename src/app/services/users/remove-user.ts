import { httpClient } from '@app/services/http-client'

interface Params {
	id: string
}

export async function removeUser({ id }: Params): Promise<void> {
	await httpClient.delete(`/users/${id}`)
}
