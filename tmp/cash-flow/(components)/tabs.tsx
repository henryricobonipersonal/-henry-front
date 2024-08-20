'use client'

import { DailyCashFlowDataTable } from '@/app/(dashboard)/cash-flow/(components)/daily-cash-flows-data-table'
import { MonthlyCashFlowDataTable } from '@/app/(dashboard)/cash-flow/(components)/monthly-cash-flow-data-table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function CashFlowTabs() {
	return (
		<Tabs defaultValue="dailyCashFlow" className="w-full">
			<TabsList className="flex items-center justify-start">
				<TabsTrigger
					type="button"
					value="dailyCashFlow"
					className="text-base flex items-center gap-2"
				>
					Fluxo de Caixa Diário
				</TabsTrigger>
				<TabsTrigger
					type="button"
					value="monthlyCashFlow"
					className="text-base flex items-center gap-2"
				>
					Fluxo de Caixa Mensal
				</TabsTrigger>
			</TabsList>
			<TabsContent value="dailyCashFlow">
				<DailyCashFlowDataTable />
			</TabsContent>
			<TabsContent value="monthlyCashFlow">
				<MonthlyCashFlowDataTable />
			</TabsContent>
		</Tabs>
	)
}
