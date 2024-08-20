'use client'

import { useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Trash } from '@phosphor-icons/react/dist/ssr'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { EditGoalsDrawer } from '@/app/(dashboard)/students/(components)/edit-goals-drawer'
import { GoalDetailsDrawer } from '@/components/goal-details-drawer'
import { ConfirmDeleteModal } from '@/components/confirm-delete-modal'
import { Switch } from '@/components/ui/switch'
import type { IGoalDTO } from '@/dtos/goal-dto'

export const columns: ColumnDef<IGoalDTO>[] = [
	{
		accessorKey: 'data',
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
		cell: ({ row }) => <div className="capitalize">{row.original.data}</div>,
	},
	{
		accessorKey: 'goalAchieved',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Status Meta
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => {
			const verifyGoalAchieved = row.original.goalAchieved

			return (
				<>
					<div className="ml-12 capitalize flex items-center gap-2">
						<Switch />
						{verifyGoalAchieved ? 'Concluído' : 'Não concluído'}
					</div>
				</>
			)
		},
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const student = row.original
			const [openDetailsMetaDrawer, setOpenDetailsMetaDrawer] = useState(false)
			const [openEditMetaDrawer, setOpenEditMetaDrawer] = useState(false)

			const [openModalConfirmDelete, setOpenModalConfirmDelete] =
				useState(false)

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
							<EditGoalsDrawer
								open={openEditMetaDrawer}
								setOpen={setOpenEditMetaDrawer}
							/>
							<button
								type="button"
								onClick={() => setOpenModalConfirmDelete(true)}
								className="ml-2.5 hover:text-gray600 text-sm  text-gray500 flex gap-2 items-center transition-all"
							>
								<Trash size={24} weight="light" />
								Excluir
							</button>
							<ConfirmDeleteModal
								open={openModalConfirmDelete}
								setOpen={setOpenModalConfirmDelete}
								title="Tem certeza que deseja excluir esse dado?"
							/>
						</div>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
