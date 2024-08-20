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
import { useState } from 'react'
import { z } from 'zod'

import { columns } from '@/app/(dashboard)/teacher-report/(components)/teacher-report-columns'
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
import { numbMessage, strMessage } from '@/utils/custom-error'
import { useTeacherReports } from '@/hooks/teacher-reports/use-teacher-reports'
import { useRouter } from 'next/navigation'

const schema = z.object({
  id: z.number(numbMessage('identificador')).min(1, 'O campo identificador é obrigatório'),
  month: z.string(strMessage('mês')).min(1, 'O campo mês é obrigatório'),
  year: z.string(strMessage('ano')).min(1, 'O campo ano é obrigatório'),
  totalNumberOfClasses: z.number(numbMessage('número total de aulas')).min(1, 'O campo número total de aulas é obrigatório'),
  priceClass: z.number(numbMessage('preço por aula')).min(1, 'O campo preço por aula é obrigatório'),
  total: z.number(numbMessage('total')).min(1, 'O campo total é obrigatório'),
  vale: z.number(numbMessage('vale')).min(0, 'O campo vale é obrigatório'),
  dateVale: z.string(strMessage('data do vale')).min(1, 'O campo data do vale é obrigatório'),
  totalReceivable: z.number(numbMessage('total a receber')).min(1, 'O campo total a receber é obrigatório'),
  profitEstimate: z.number(numbMessage('estimativa de lucro')).min(1, 'O campo estimativa de lucro é obrigatório'),
});

export type FormData = z.infer<typeof schema>;

export function TeacherReportDataTable() {
	const router = useRouter()
	const { teacherReports, meta } = useTeacherReports({
		pageIndex: 1,
		searchTerm: 'oi',
		sorting: [
			{
				id: 'month',
				desc: true,
			},
		],
	})

	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data: teacherReports,
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
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id === 'month' && 'Mês'}
										{column.id === 'year' && 'Ano'}
										{column.id === 'totalNumberOfClasses' && 'Total de aulas dadas no mês'}
										{column.id === 'priceClass' && 'Valor aula/h'}
										{column.id === 'total' && 'Total'}
										{column.id === 'vale' && 'Vales'}
										{column.id === 'totalReceivable' && 'Total a Receber'}
										{column.id === 'profitEstimate' && 'Estimativa de Lucro'}
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
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
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
					pageSize={meta.perPage}
					totalCount={meta.totalCount}
					onPageChange={handlePaginate}
				/>
			)}
		</div>
	)
}
