'use client'

import { AnnualBillingChart } from '@/components/graphics/annual-billing-chart'
import { FundReleaseModal } from '@/components/create-fund-release-modal'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'

export function MonthlyReportContent() {
	const [openModal, setOpenModal] = useState(false)

	return (
		<div className="mt-6">
			<AnnualBillingChart />

			<div className="flex items-center justify-end gap-4 mb-6 mt-12">
				<button
					type="button"
					className="border rounded-md p-2 cursor-pointer hover:opacity-50"
				>
					<CaretLeft size={20} />
				</button>
				<p className="font-medium text-gray900">Jun 2024</p>
				<button
					type="button"
					className="border rounded-md p-2 cursor-pointer hover:opacity-50"
				>
					<CaretRight size={20} />
				</button>
			</div>
			<p className="text-sm mb-4">
				⚠️ Os dados apresentados abaixo estão sujeitos a alterações até o final
				do mês.
			</p>
			<div className="grid grid-cols-3 sm:grid-cols-1 gap-6 mb-6">
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Total de aulas dadas no mês
					</p>
					<p className="text-purple500 font-semibold text-5xl">400</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Média de aulas por dia
					</p>
					<p className="text-blue500 font-semibold text-5xl">12</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Média da aula/h
					</p>
					<p className="text-green-500 font-semibold text-5xl">R$ 70,00</p>
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Faturamento total previsto
					</p>
					<p className="text-green-500 font-semibold text-5xl">R$ 1.200,00</p>
				</div>
				<div className="border rounded-md shadow p-8">
					<p className="text-sm font-medium text-gray600 mb-4">
						Suposta inadimplência
					</p>
					<p className="text-green-500 font-semibold text-5xl">R$ 200,00</p>
				</div>
			</div>
			<FundReleaseModal open={openModal} setOpen={setOpenModal} />
		</div>
	)
}
