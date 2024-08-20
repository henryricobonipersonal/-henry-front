import { CreateFundReleaseModal } from '@/app/(dashboard)/cash-flow/(components)/create-fund-release-modal'
import { CashFlowChart } from '@/app/(dashboard)/cash-flow/(components)/chart'
import { CashFlowTabs } from '@/app/(dashboard)/cash-flow/(components)/tabs'
import { PageLayout } from '@/components/page-layout'
import type { Metadata } from 'next'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Fluxo de caixa',
}

export default function CashFlow() {
	return (
		<Fragment>
			<PageLayout icon="cashFlow" title="Fluxo de Caixa">
				<CreateFundReleaseModal />
			</PageLayout>
			<CashFlowChart />
			<CashFlowTabs />
		</Fragment>
	)
}
