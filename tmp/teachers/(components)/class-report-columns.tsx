'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import type { IClassReportDTO } from '@/dtos/class-report-dto'

export const columns: ColumnDef<IClassReportDTO>[] = [
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
			<div className="capitalize">{String(row.original.date)}</div>
		),
	},
	{
		accessorKey: 'hours',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Horário
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="lowercase ">{String(row.original.hours)}</div>
		),
	},
	{
		accessorKey: 'replaceClass',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Reposição
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize">
				{row.original.replaceClass ? (
					<p className="text-green500 font-bold">Sim</p>
				) : (
					<p className="text-red500 font-bold">Não</p>
				)}
			</div>
		),
	},
	{
		accessorKey: 'typeOfTraining',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Tipo de Treino
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize text-purple500 font-bold">
				{row.original.typeOfTraining}
			</div>
		),
	},
	{
		accessorKey: 'price',
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
		cell: ({ row }) => <div className="capitalize">{row.original.price}</div>,
	},
	{
		accessorKey: 'paymentStatus',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Status Pagamento
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder={row.original.paymentStatus} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Status de pagamento</SelectLabel>
								<SelectItem value="pending-payment">
									Pagamento pendente
								</SelectItem>
								<SelectItem value="payment-confirmed">
									Pagamento confirmado
								</SelectItem>
								<SelectLabel className="text-xs mt-2">
									⚠️ Essa edição implicará diretamente nos relatórios financeiros
									do sistema.
								</SelectLabel>
							</SelectGroup>
						</SelectContent>
					</Select>
				</>
			)
		},
	},
]
