import { useContext } from 'react'

import { AuthContext } from '@app/contexts/auth'

export function useAuth() {
	return useContext(AuthContext)
}