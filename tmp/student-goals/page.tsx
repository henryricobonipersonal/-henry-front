import type { Metadata } from 'next'

import { PageLayout } from '@/components/page-layout'

import { StudentGoalsDataTable } from '@/app/(dashboard)/student-goals/(components)/data-table'

export const metadata: Metadata = {
	title: 'Minhas metas',
}

export default function MetasStudent() {
	return (
		<div>
			<PageLayout title="Minhas metas" />
			<StudentGoalsDataTable />
		</div>
	)
}
