import { MonthlyReportContent } from '@/app/(dashboard)/monthly-report/(components)/content'
import { PageLayout } from '@/components/page-layout'
import type { Metadata } from 'next'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Relatório mensal',
}

export default function MonthReport() {
	return (
		<Fragment>
			<PageLayout title="Relatórios do mês" />
			<MonthlyReportContent />
		</Fragment>
	)
}
