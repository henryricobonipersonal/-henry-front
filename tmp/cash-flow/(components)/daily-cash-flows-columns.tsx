'use client'

import { useState } from 'react'

import type { ColumnDef } from '@tanstack/react-table'

import { ArrowUpDown } from 'lucide-react'

import { ManualExpenseModal } from '@/app/(dashboard)/cash-flow/(components)/manual-expense-modal'
import { ManualIncomeModal } from '@/app/(dashboard)/cash-flow/(components)/manual-income-modal'
import { Button } from '@/components/ui/button'
import type { IDailyCashFlowDTO } from '@/dtos/daily-cash-flow-dto'

export const columns: ColumnDef<IDailyCashFlowDTO>[] = [
	{
		accessorKey: 'date',
		header: ({ column }) => {
			return (
				<Button
					type="button"
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Data
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="capitalize">{row.original.date}</div>,
	},
	{
		accessorKey: 'entry',
		header: () => {
			return (
				<Button type="button" variant="ghost">
					Recebimentos
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="lowercase">{row.original.automaticIncome}</div>
		),
	},
	{
		accessorKey: 'exit',
		header: () => {
			return (
				<Button type="button" variant="ghost">
					Pagamentos
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="lowercase">{row.original.automaticExpense}</div>
		),
	},
	{
		accessorKey: 'entryOthers',
		header: () => {
			return (
				<Button type="button" variant="ghost">
					Outros recebimentos
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => {
			const [openEntryModal, setOpenEntryModal] = useState(false)

			return (
				<>
					<div>
						<button
							type="button"
							onClick={() => setOpenEntryModal(true)}
							className="w-full text-start py-1 lowercase cursor-pointer"
						>
							{row.original.manualIncome}
						</button>
					</div>
					<ManualIncomeModal
						open={openEntryModal}
						setOpen={setOpenEntryModal}
					/>
				</>
			)
		},
	},
	{
		accessorKey: 'exitOthers',
		header: () => {
			return (
				<Button type="button" variant="ghost">
					Outros pagamentos
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => {
			const [openExitModal, setOpenExitModal] = useState(false)

			return (
				<>
					<div>
						<button
							type="button"
							onClick={() => setOpenExitModal(true)}
							className="w-full text-start py-1 lowercase cursor-pointer"
						>
							{row.original.manualExpense}
						</button>
					</div>
					<ManualExpenseModal open={openExitModal} setOpen={setOpenExitModal} />
				</>
			)
		},
	},
	{
		accessorKey: 'total',
		header: () => {
			return (
				<Button type="button" variant="ghost">
					Saldo
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.original.amount}</div>,
	},
]
