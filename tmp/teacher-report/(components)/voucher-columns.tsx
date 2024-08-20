'use client'

import { Trash } from '@phosphor-icons/react/dist/ssr'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { IVoucherDTO } from '@/dtos/voucher-dto'

export interface IVoucher {
	id: number
	date: string
	value: number
}

export const columns: ColumnDef<IVoucherDTO>[] = [
	{
		accessorKey: 'date',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Data do Vale
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="capitalize">{row.original.date}</div>,
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
					Valor do Vale
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="capitalize">{row.original.value}</div>,
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
