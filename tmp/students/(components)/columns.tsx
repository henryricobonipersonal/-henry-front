'use client'

import { Trash } from '@phosphor-icons/react/dist/ssr'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { AnamneseDrawer } from '@/app/(dashboard)/students/(components)/anamnese-drawer'
import { EditStudentDrawer } from '@/app/(dashboard)/students/(components)/edit-student-drawer'
import { EvolutionHistoryDrawer } from '@/app/(dashboard)/students/(components)/evolution-history-drawer'
import { FrequencyManagementDrawer } from '@/app/(dashboard)/students/(components)/frequency-management-drawer'
import { GoalsDrawer } from '@/app/(dashboard)/students/(components)/goals-drawer'
import { RecordDrawer } from '@/app/(dashboard)/students/(components)/record-drawer'
import { StudentDetailsDrawer } from '@/app/(dashboard)/students/(components)/student-details-drawer'
import { ConfirmDeleteModal } from '@/components/confirm-delete-modal'
import { PhysicalReassessmentHistoryDrawer } from '@/app/(dashboard)/students/(components)/physical-reassessment-history-drawer'
import { PhysicalAssessmentDrawer } from '@/app/(dashboard)/students/(components)/physical-assessment-drawer'
import { PhysicalReassessmentDrawer } from '@/app/(dashboard)/students/(components)/physical-reassessment-drawer'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { IStudentDTO } from '@/dtos/student-dto'

export const columns: ColumnDef<IStudentDTO>[] = [
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
			<div className="lowercase ">{row.original.login.email}</div>
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
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const student = row.original
			const [openEditDataStudentDrawer, setOpenEditDataStudentDrawer] =
				useState(false)
			const [openDetailsStudentDrawer, setOpenDetailsStudentDrawer] =
				useState(false)
			const [openFrequencyControlDrawer, setOpenFrequencyControlDrawer] =
				useState(false)
			const [openAnamneseStudentDrawer, setOpenAnamneseStudentDrawer] =
				useState(false)
			const [openProntuarioStudentDrawer, setOpenProntuarioStudentDrawer] =
				useState(false)
			const [openPhysicalAssessmentDrawer, setOpenPhysicalAssessmentDrawer] =
				useState(false)
			const [openHistoryOfEvolutionDrawer, setOpenHistoryOfEvolutionDrawer] =
				useState(false)
			const [
				openHistoryPhysicalReassessmentsDrawer,
				setOpenHistoryPhysicalReassessmentsDrawer,
			] = useState(false)
			const [
				openHistoryOfPhysicalAssessmentsDrawer,
				setOpenHistoryOfPhysicalAssessmentsDrawer,
			] = useState(false)
			const [openMetasDrawer, setOpenMetasDrawer] = useState(false)

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
							<EditStudentDrawer
								open={openEditDataStudentDrawer}
								setOpen={setOpenEditDataStudentDrawer}
							/>
							<StudentDetailsDrawer
								open={openDetailsStudentDrawer}
								setOpen={setOpenDetailsStudentDrawer}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Aulas</DropdownMenuLabel>
							<FrequencyManagementDrawer
								open={openFrequencyControlDrawer}
								setOpen={setOpenFrequencyControlDrawer}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Saúde</DropdownMenuLabel>
							<PhysicalAssessmentDrawer
								open={openPhysicalAssessmentDrawer}
								setOpen={setOpenPhysicalAssessmentDrawer}
							/>
							<PhysicalReassessmentDrawer
								open={openHistoryPhysicalReassessmentsDrawer}
								setOpen={setOpenHistoryPhysicalReassessmentsDrawer}
							/>
							<AnamneseDrawer
								open={openAnamneseStudentDrawer}
								setOpen={setOpenAnamneseStudentDrawer}
							/>
							<RecordDrawer
								open={openProntuarioStudentDrawer}
								setOpen={setOpenProntuarioStudentDrawer}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Metas</DropdownMenuLabel>
							<GoalsDrawer
								open={openMetasDrawer}
								setOpen={setOpenMetasDrawer}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<DropdownMenuLabel>Históricos</DropdownMenuLabel>
							<EvolutionHistoryDrawer
								open={openHistoryOfEvolutionDrawer}
								setOpen={setOpenHistoryOfEvolutionDrawer}
							/>
							<PhysicalReassessmentHistoryDrawer
								open={openHistoryOfPhysicalAssessmentsDrawer}
								setOpen={setOpenHistoryOfPhysicalAssessmentsDrawer}
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
								title="Excluir dados do aluno: Aluno 1"
								subtitle="⚠️ Ao excluir os dados do aluno, todas as informações associadas serão permanentemente apagadas."
							/>
						</div>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
