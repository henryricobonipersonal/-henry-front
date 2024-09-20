'use client'

import {
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'

import { columns } from '@/app/(dashboard)/teachers/(components)/class-report-columns'
import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useClassReports } from '@/hooks/class-reports/use-class-reports'
import { boolMsg, numbMsg, strMsg } from '@/utils/custom-error'

const schema = z.object({
	id: z.number(numbMsg('identificador')).min(1, 'O campo identificador é obrigatório'),
	date: z.string(strMsg('data')).min(1, 'O campo data é obrigatório'),
	hours: z.string(strMsg('horário')).min(1, 'O campo horário é obrigatório'),
	replaceClass: z.boolean(boolMsg('reposição de aula')),
	typeOfTraining: z.string(strMsg('tipo de treino')).min(1, 'O campo tipo de treino é obrigatório'),
	price: z.number(numbMsg('preço')).min(1, 'O campo preço é obrigatório'),
	paymentStatus: z
		.string(strMsg('status de pagamento'))
		.min(1, 'O campo status de pagamento é obrigatório'),
})

export type FormData = z.infer<typeof schema>

export function ClassReportDataTable() {
	const router = useRouter()
	const { classReports, meta } = useClassReports({
		pageIndex: 1,
		searchTerm: 'oi',
		sorting: [
			{
				id: 'date',
				desc: true,
			},
		],
	})

	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data: classReports,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	function handlePaginate(newPageIndex: number) {
		router.push(`/your-page-path?page=${newPageIndex + 1}`)
	}

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="ml-auto">
							Colunas <ChevronDown className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="center" className="bg-white">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) => column.toggleVisibility(!!value)}
									>
										{column.id === 'date' && 'Data'}
										{column.id === 'hours' && 'Hora'}
										{column.id === 'replaceClass' && 'Reposição'}
										{column.id === 'typeOfTraining' && 'Tipo de Treino'}
										{column.id === 'price' && 'Total'}
										{column.id === 'paymentStatus' && 'Status de Pagamento'}
									</DropdownMenuCheckboxItem>
								)
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									Nenhum resultado encontrado.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{meta && (
				<Pagination
					pageIndex={meta.pageIndex}
					pageSize={meta.totalCount}
					totalCount={meta.totalCount}
					onPageChange={handlePaginate}
				/>
			)}
		</div>
	)
}
