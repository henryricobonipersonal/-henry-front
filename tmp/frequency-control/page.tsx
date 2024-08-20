import type { Metadata } from 'next'

import { FrequencyControlPage } from '@/app/(dashboard)/frequency-control/(components)/frequency-control-page'
import { PageLayout } from '@/components/page-layout'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Controle de Frequência',
}

export default function FrequencyControl() {
	return (
		<Fragment>
			<PageLayout title="Controle de Frequência" />
			<FrequencyControlPage />
		</Fragment>
	)
}
