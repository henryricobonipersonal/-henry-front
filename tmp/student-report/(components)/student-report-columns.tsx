'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { IStudentReportDTO } from '@/dtos/student-report-dto'

export const columns: ColumnDef<IStudentReportDTO>[] = [
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
		cell: ({ row }) => (
			<div>
				{row.original.month} de {row.original.year}
			</div>
		),
	},
	{
		accessorKey: 'foulsWithoutReplacement',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Total de faltas <br /> sem direito a reposição
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize text-red500 font-bold">
				{row.original.foulsWithoutReplacement}
			</div>
		),
	},
	{
		accessorKey: 'foulsWithReplacement',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Total de faltas <br /> com direito a reposição
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize text-green500 font-bold">
				{row.original.foulsWithReplacement}
			</div>
		),
	},
	{
		accessorKey: 'priceClass',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Valor aula/h
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize">{row.original.priceClass}</div>
		),
	},
	{
		accessorKey: 'partialPayment',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Pagamento parcial
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize">{row.original.partialPayment}</div>
		),
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
					Total a pagar
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize font-bold">{row.original.total}</div>
		),
	},
]
