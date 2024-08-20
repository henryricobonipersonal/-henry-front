import type { Metadata } from 'next'
import { Fragment } from 'react'

import { EditAdminAccountForm } from '@/app/(dashboard)/edit-account/(components)/edit-admin-account'
import { EditStudentAccountForm } from '@/app/(dashboard)/edit-account/(components)/edit-student-account'
import { PageLayout } from '@/components/page-layout'
import { SaveButton } from '@/app/(dashboard)/edit-account/(components)/save-button'

export const metadata: Metadata = {
	title: 'Editar conta',
}

export default function editAccount() {
	return (
		<Fragment>
			<PageLayout title="Editar Conta">
				<SaveButton />
			</PageLayout>

			<EditAdminAccountForm />
			<EditStudentAccountForm />
		</Fragment>
	)
}
