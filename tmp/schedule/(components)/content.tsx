'use client'

import { StudentSchedule } from '@/app/(dashboard)/schedule/(components)/student-schedule'
import { TeacherSchedule } from '@/app/(dashboard)/schedule/(components)/teacher-schedule'
import { AdminSchedule } from '@/app/(dashboard)/schedule/(components)/admin-schedule'
import { useAuth } from '@/contexts/use-auth'

export function RenderContent() {
	const { userType } = useAuth()

	function renderContent() {
		switch (userType) {
			case 'admin':
				return <AdminSchedule />
			case 'teacher':
				return <TeacherSchedule />
			case 'student':
				return <StudentSchedule />
			default:
				return <AdminSchedule />
		}
	}

	return <div className="mt-6">{renderContent()}</div>
}
