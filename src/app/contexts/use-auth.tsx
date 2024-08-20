'use client'

import React, {
	createContext,
	useState,
	useContext,
	type ReactNode,
} from 'react'

interface Props {
	children: ReactNode
}

interface ContextProps {
	userType: 'admin' | 'teacher' | 'student'
}

const AuthContext = createContext({} as ContextProps)

export const AuthProvider = ({ children }: Props) => {
	const [userType, setUserType] = useState<'admin' | 'teacher' | 'student'>(
		'student',
	)

	return (
		<AuthContext.Provider value={{ userType }}>{children}</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
}
