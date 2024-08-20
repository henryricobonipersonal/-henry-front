'use client'

import { useState } from 'react'
import { Trash } from '@phosphor-icons/react/dist/ssr'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CalendarSelect } from '@/components/calendar-select'
import type { IManualIncomeDTO } from '@/dtos/manual-income-dto'

export interface IManualIncome {
	id: number
	date: string
	value: number
	subject: string
}

export const columns: ColumnDef<IManualIncomeDTO>[] = [
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
		cell: ({ row }) => {
			const [date, setDate] = useState<Date | undefined>(new Date())

			return (
				<form>
					<CalendarSelect
						dateValue={date}
						setDateValue={setDate}
						type="clean"
					/>
				</form>
			)
		},
	},
	{
		accessorKey: 'value',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Assunto
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize">
				<input
					className="border-b border-gray900 py-2 active:border-b-orange500 focus:border-b-orange500 hover:border-b-orange500 transition-colors"
					value={row.original.subject}
				/>
			</div>
		),
	},
	{
		accessorKey: 'value',
		header: ({ column }) => {
			return <p>Valor</p>
		},
		cell: ({ row }) => (
			<div className="capitalize">
				<input
					className="max-w-[80px] border-b border-gray900 py-2 active:border-b-orange500 focus:border-b-orange500 hover:border-b-orange500 transition-colors"
					value={row.original.value}
				/>
			</div>
		),
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			return (
				<>
					<button
						type="button"
						className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all"
					>
						<Trash size={24} weight="light" />
						Excluir
					</button>
				</>
			)
		},
	},
]
