'use client'

import { SaveAll } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/use-auth'

export function SaveButton() {
	const { userType } = useAuth()

	return (
		<Button
			form={
				userType === 'admin' || userType === 'student'
					? 'edit-admin-account-form'
					: 'edit-student-account-form'
			}
			type="submit"
			className=""
		>
			<span>
				<SaveAll className="size-5 text-white z-50 mr-1.5" strokeWidth={2} />
			</span>
			Salvar
		</Button>
	)
}
