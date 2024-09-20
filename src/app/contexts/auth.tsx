import { createContext, type ReactNode, useCallback, useLayoutEffect, useState } from 'react'

import { localStorageKeys } from '@app/config/local-storage-keys'
import { login } from '@app/services/authentication/login'
import { httpClient } from '@app/services/http-client'

interface ISignInProps {
	email: string
	password: string
}

interface IAuthContextValue {
	role: string
	signedIn: boolean
	signIn({ email, password }: ISignInProps): Promise<void>
	signOut(): void
}

export const AuthContext = createContext({} as IAuthContextValue)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [role] = useState<'admin' | 'teacher' | 'student'>('admin')
	const [signedIn, setSignedIn] = useState(() => {
		return !!localStorage.getItem(localStorageKeys.accessToken)
	})

	useLayoutEffect(() => {
		const interceptorId = httpClient.interceptors.request.use((config) => {
			console.log(config.url)

			const accessToken = localStorage.getItem(localStorageKeys.accessToken)

			if (accessToken) {
				config.headers.set('Authorization', `Bearer ${accessToken}`)
			}

			return config
		})

		return () => {
			httpClient.interceptors.request.eject(interceptorId)
		}
	}, [])

	useLayoutEffect(() => {
		console.log('Add response interceptor')

		const interceptorId = httpClient.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config
				const refreshToken = localStorage.getItem(localStorageKeys.refreshToken)

				if (originalRequest.url === '/refresh-token') {
					setSignedIn(false)
					localStorage.clear()
					return Promise.reject(error)
				}

				if (error.response?.status !== 401 || !refreshToken) {
					return Promise.reject(error)
				}

				// const { accessToken, refreshToken: newRefreshToken } =
				// 	await AuthService.refreshToken(refreshToken)

				// localStorage.setItem(localStorageKeys.accessToken, accessToken)
				// localStorage.setItem(localStorageKeys.refreshToken, newRefreshToken)

				return httpClient(originalRequest)
			},
		)

		return () => {
			httpClient.interceptors.response.eject(interceptorId)
		}
	}, [])

	const signIn = useCallback(async ({ email, password }: ISignInProps) => {
		const { accessToken } = await login({
			email,
			password,
		})

		localStorage.setItem(localStorageKeys.accessToken, accessToken)
		// localStorage.setItem(localStorageKeys.refreshToken, refreshToken)

		setSignedIn(true)
	}, [])

	const signOut = useCallback(() => {
		localStorage.clear()
		setSignedIn(false)
	}, [])

	const value: IAuthContextValue = {
		role,
		signedIn,
		signIn,
		signOut,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
