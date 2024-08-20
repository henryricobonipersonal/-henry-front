'use client'

import { useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TeacherReportDetailsDrawer } from '@/app/(dashboard)/teacher-report/(components)/teacher-report-details-drawer'
import type { ITeacherReportListDTO } from '@/dtos/teacher-report-list-dto'

export const columns: ColumnDef<ITeacherReportListDTO>[] = [
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
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const [openDetailsTeacherDrawer, setOpenTeacherStudentDrawer] =
				useState(false)

			return (
				<>
					<TeacherReportDetailsDrawer
						open={openDetailsTeacherDrawer}
						setOpen={setOpenTeacherStudentDrawer}
					/>
				</>
			)
		},
	},
]
