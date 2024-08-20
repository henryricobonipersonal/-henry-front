'use client'

import { Trash } from '@phosphor-icons/react/dist/ssr'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { ClassReportTeacherDrawer } from '@/app/(dashboard)/teachers/(components)/class-report-drawer'
import { TeacherDetailsDrawer } from '@/app/(dashboard)/teachers/(components)/teacher-details-drawer'
import { EditTeacherDrawer } from '@/app/(dashboard)/teachers/(components)/edit-teacher-drawer'
import { ConfirmDeleteModal } from '@/components/confirm-delete-modal'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ITeacherDTO } from '@/dtos/teacher-dto'

export const columns: ColumnDef<ITeacherDTO>[] = [
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
		accessorKey: 'email',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					E-mail
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className="lowercase">{row.original.login.email}</div>
		),
	},
	{
		accessorKey: 'phone',
		header: ({ column }) => {
      return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					type="button"
				>
					Telefone
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.original.phone}</div>,
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
					Valor/h
					<ArrowUpDown className="ml-1.5 size-4 text-orange500" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.original.price}</div>,
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const student = row.original
			const [openEditDataTeacherDrawer, setOpenEditDataTeacherDrawer] =
				useState(false)
			const [openDetailsTeacherDrawer, setOpenDetailsTeacherDrawer] =
				useState(false)
			const [openClassReportTeacherDrawer, setOpenClassReportTeacherDrawer] =
				useState(false)

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
							<EditTeacherDrawer
								open={openEditDataTeacherDrawer}
								setOpen={setOpenEditDataTeacherDrawer}
							/>
							<TeacherDetailsDrawer
								open={openDetailsTeacherDrawer}
								setOpen={setOpenDetailsTeacherDrawer}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Aulas</DropdownMenuLabel>
							<ClassReportTeacherDrawer
								open={openClassReportTeacherDrawer}
								setOpen={setOpenClassReportTeacherDrawer}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Editar</DropdownMenuLabel>
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
								title="Excluir dados do professor: Professor 1"
								subtitle="⚠️ Ao excluir os dados do aluno, todas as informações associadas serão permanentemente apagadas."
							/>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
