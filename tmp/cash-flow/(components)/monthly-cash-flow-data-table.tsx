'use client'

import { useState } from 'react'
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
import { z } from 'zod'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { columns } from '@/app/(dashboard)/cash-flow/(components)/monthly-cash-flow-columns'
import { Pagination } from '@/components/pagination'
import { numbMessage, strMessage } from '@/utils/custom-error'
import { useMonthlyCashFlows } from '@/hooks/monthly-cash-flows/use-monthly-cash-flows'
import { useRouter } from 'next/navigation'

const schema = z.object({
	id: z
		.string(strMessage('identificador'))
		.min(1, 'O campo identificador é obrigatório'),
	date: z.string(strMessage('data')).min(1, 'O campo data é obrigatório'),
	automaticIncome: z
		.number(numbMessage('renda automática'))
		.min(1, 'O campo renda automática é obrigatório'),
	manualIncome: z
		.number(numbMessage('renda manual'))
		.min(1, 'O campo renda manual é obrigatório'),
	automaticExpense: z
		.number(numbMessage('despesa automática'))
		.min(1, 'O campo despesa automática é obrigatório'),
	manualExpense: z
		.number(numbMessage('despesa manual'))
		.min(1, 'O campo despesa manual é obrigatório'),
	amount: z.number(numbMessage('valor')).min(1, 'O campo valor é obrigatório'),
})

export type MonthlyCashFlowFormData = z.infer<typeof schema>

export function MonthlyCashFlowDataTable() {
	const router = useRouter()
	const { monthlyCashFlows, meta } = useMonthlyCashFlows({
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
		data: monthlyCashFlows,
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
		<div className="w-full mt-4">
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
