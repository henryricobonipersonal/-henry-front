'use client'

import { AdminDashboard } from '@/app/(dashboard)/home/(components)/admin-dashboard'
import { StudentDashboard } from '@/app/(dashboard)/home/(components)/student-dashboard'
import { TeacherDashboard } from '@/app/(dashboard)/home/(components)/teacher-dashboard'

import { useAuth } from '@/contexts/use-auth'

export function RenderContent() {
	const { userType } = useAuth()

	function getRoleContent() {
		switch (userType) {
			case 'admin':
				return <AdminDashboard />
			case 'teacher':
				return <TeacherDashboard />
			case 'student':
				return <StudentDashboard />
			default:
				return <AdminDashboard />
		}
	}

	return getRoleContent()
}
