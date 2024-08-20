'use client'

import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { cashflowData } from '@/cashflow-data'
import { CustomTooltip } from '@/app/(dashboard)/cash-flow/(components)/custom-tooltip'

export function CashFlowChart() {
	return (
		<div className="mt-6 bg-white">
			<Card className="col-span-6 mb-8">
				<CardHeader className="flex-row items-center justify-between pb-8">
					<div className="space-y-1">
						<CardTitle>Receita no período</CardTitle>
						<CardDescription>Receita diária no período</CardDescription>
					</div>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={240}>
						<LineChart data={cashflowData} style={{ fontSize: 12 }}>
							<CartesianGrid vertical={false} className="stroke-muted" />
							<Line
								type="linear"
								strokeWidth={2}
								dataKey="automaticReceipts"
								stroke={colors.blue[700]}
							/>
							<Line
								type="linear"
								strokeWidth={2}
								dataKey="manualReceipts"
								stroke={colors.green[700]}
							/>
							<Line
								type="linear"
								strokeWidth={2}
								dataKey="automaticPayments"
								stroke={colors.red[700]}
							/>
							<Line
								type="linear"
								strokeWidth={2}
								dataKey="manualPayments"
								stroke={colors.yellow[700]}
							/>
							<Line
								type="linear"
								strokeWidth={2}
								dataKey="amount"
								stroke={colors.purple[700]}
							/>
							<XAxis
								dataKey="date"
								tickLine={false}
								axisLine={false}
								dy={16}
								tickFormatter={(date) =>
									date.charAt(0).toUpperCase() + date.slice(1)
								} // Capitaliza a primeira letra do mês
							/>
							<YAxis
								stroke="#888"
								axisLine={false}
								tickLine={false}
								width={80}
								tickFormatter={(value: number) =>
									value.toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									})
								}
							/>
							<Tooltip
								content={<CustomTooltip />}
								contentStyle={{ borderRadius: '8px' }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	)
}
