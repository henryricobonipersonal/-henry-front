import type { Metadata } from 'next'

import { Fragment } from 'react'

import { TeachersDataTable } from '@/app/(dashboard)/teachers/(components)/teacher-data-table'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
	title: 'Lista de professores',
}

export default function Teachers() {
	return (
		<Fragment>
			<PageLayout title="Lista de professores" icon="list" />
			<TeachersDataTable />
		</Fragment>
	)
}
