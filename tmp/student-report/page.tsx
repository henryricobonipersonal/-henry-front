import type { Metadata } from 'next'

import { StudentReportDataTable } from '@/app/(dashboard)/student-report/(components)/student-report-data-table'
import { PageLayout } from '@/components/page-layout'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Relatórios do aluno',
}

export default function Students() {
	return (
		<Fragment>
			<PageLayout title="Relatórios do aluno" />
			<StudentReportDataTable />
		</Fragment>
	)
}
