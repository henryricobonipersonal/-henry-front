import axios from 'axios'

export interface AppError {
	response: {
		data: {
			code: string
			error: string
			message: string
			data: unknown
		}
	}
}

export const httpClient = axios.create({
	baseURL: "http://localhost:8080/api/v1",
	headers: {
		'Content-Type': 'application/json',
	},
})

httpClient.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem('accessToken')

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export function parseError(error: AppError): string {
	return (
		error?.response?.data?.message ??
		'Ocorreu um erro no servidor, por favor tente novamente mais tarde'
	)
}
