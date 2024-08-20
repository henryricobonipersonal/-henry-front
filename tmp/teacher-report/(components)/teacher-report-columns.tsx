'use client'

import type { ColumnDef } from '@tanstack/react-table'

import type { ITeacherReportDTO } from '@/dtos/teacher-report-dto'
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'

export const columns: ColumnDef<ITeacherReportDTO>[] = [
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
		accessorKey: 'totalNumberOfClasses',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Total de aulas <br /> dadas no mês
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize text-green500 font-bold">
				{row.original.totalNumberOfClasses}
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
		accessorKey: 'total',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Total
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize font-bold">{row.original.total}</div>
		),
	},
	{
		accessorKey: 'vale',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Vales
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="capitalize">{row.original.vale}</div>,
	},
	{
		accessorKey: 'totalReceivable',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Total a Receber
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize font-bold">{row.original.totalReceivable}</div>
		),
	},
	{
		accessorKey: 'profitEstimate',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Estimativa de Lucro
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize font-bold">{row.original.profitEstimate}</div>
		),
	},
]
