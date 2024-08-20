import type { Metadata } from 'next'

import { CreateTeacherForm } from '@/app/(dashboard)/create-teacher/(components)/create-teacher-form'
import { SaveButton } from '@/app/(dashboard)/create-teacher/(components)/save-button'
import { PageLayout } from '@/components/page-layout'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Novo Professor',
}

export default function NewTeacher() {
	return (
		<Fragment>
			<PageLayout title="Novo Professor">
				<SaveButton />
			</PageLayout>
			<CreateTeacherForm />
		</Fragment>
	)
}
