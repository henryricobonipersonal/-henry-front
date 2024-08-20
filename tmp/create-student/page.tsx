import type { Metadata } from 'next'

import { SaveButton } from '@/app/(dashboard)/create-student/(components)/save-button'
import { CreateStudentForm } from '@/app/(dashboard)/create-student/(components)/create-student-form'
import { PageLayout } from '@/components/page-layout'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Novo aluno',
}

export default function CreateStudent() {
	return (
		<Fragment>
			<PageLayout title="Novo Aluno">
				<SaveButton />
			</PageLayout>
			<CreateStudentForm />
		</Fragment>
	)
}
