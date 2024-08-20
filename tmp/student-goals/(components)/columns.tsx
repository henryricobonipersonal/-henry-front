'use client'

import { useState } from 'react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ColumnDef } from '@tanstack/react-table'

import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { GoalDetailsDrawer } from '@/components/goal-details-drawer'
import { Button } from '@/components/ui/button'
import type { IStudentGoalDTO } from '@/dtos/student-goal-dto'

export const columns: ColumnDef<IStudentGoalDTO>[] = [
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
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Nome
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="capitalize">{row.original.name}</div>,
	},
	{
		accessorKey: 'description',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Descrição
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize">{row.original.description}</div>
		),
	},
	{
		accessorKey: 'status',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Status
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="capitalize">
				{row.original.status ? (
					<span className="text-green500">Completada</span>
				) : (
					<span className="text-red500">Pendente</span>
				)}
			</div>
		),
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const [openDetailsMetaDrawer, setOpenDetailsMetaDrawer] = useState(false)

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="center">
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Dados</DropdownMenuLabel>
							<GoalDetailsDrawer
								open={openDetailsMetaDrawer}
								setOpen={setOpenDetailsMetaDrawer}
							/>
						</div>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
