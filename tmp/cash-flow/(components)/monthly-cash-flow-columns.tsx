'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { useState } from 'react'

import { ManualExpenseModal } from '@/app/(dashboard)/cash-flow/(components)/manual-expense-modal'
import { ManualIncomeModal } from '@/app/(dashboard)/cash-flow/(components)/manual-income-modal'
import { Button } from '@/components/ui/button'

export interface IMonthlyCashFlow {
	id: number
	date: string
	automaticIncome: number
	manualIncome: number
	automaticExpense: number
	manualExpense: number
	amount: number
}

export const columns: ColumnDef<IMonthlyCashFlow>[] = [
	{
		accessorKey: 'date',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
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
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
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
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
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
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
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
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
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
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Saldo
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.original.amount}</div>,
	},
]
