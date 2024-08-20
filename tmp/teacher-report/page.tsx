import type { Metadata } from 'next'
import { Fragment } from 'react'

import { TeacherReportDataTable } from '@/app/(dashboard)/teacher-report/(components)/teacher-list-data-table'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
	title: 'Relatórios do professor',
}

export default function Students() {
	return (
		<Fragment>
			<PageLayout title="Relatórios do professor" />
			<TeacherReportDataTable />
		</Fragment>
	)
}
