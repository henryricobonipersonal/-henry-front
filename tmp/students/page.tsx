import type { Metadata } from 'next'
import { Fragment } from 'react'

import { StudentsDataTable } from '@/app/(dashboard)/students/(components)/data-table'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
	title: 'Lista de alunos',
}

export default function Students() {
	return (
		<Fragment>
			<PageLayout title="Lista de alunos" />
			<StudentsDataTable />
		</Fragment>
	)
}
