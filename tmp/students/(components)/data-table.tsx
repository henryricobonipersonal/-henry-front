'use client'

import Link from 'next/link'
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
import { ChevronDown } from 'lucide-react'
import { z } from 'zod'

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { columns } from '@/app/(dashboard)/students/(components)/columns'
import { numbMessage, strMessage } from '@/utils/custom-error'
import { useStudents } from '@/hooks/students/use-students'
import { useRouter } from 'next/navigation'

const addressSchema = z.object({
	zipCode: z.string(strMessage('CEP')).min(1, 'O campo CEP é obrigatório'),
	state: z.string(strMessage('estado')).min(1, 'O campo estado é obrigatório'),
	city: z.string(strMessage('cidade')).min(1, 'O campo cidade é obrigatório'),
	neighborhood: z.string(strMessage('bairro')).min(1, 'O campo bairro é obrigatório'),
	street: z.string(strMessage('rua')).min(1, 'O campo rua é obrigatório'),
	number: z.number(numbMessage('número')).min(1, 'O campo número é obrigatório'),
	complement: z.string(strMessage('complemento')).optional(),
});

const socialsSchema = z.object({
	instagram: z.string(strMessage('instagram')).optional(),
	facebook: z.string(strMessage('facebook')).optional(),
	twitter: z.string(strMessage('twitter')).optional(),
	other: z.string(strMessage('outras redes sociais')).optional(),
});

const loginSchema = z.object({
	email: z.string(strMessage('email')).email('O campo email deve ser um email válido'),
	password: z.string(strMessage('senha')).optional(),
});

const schema = z.object({
	id: z.number(numbMessage('identificador')).min(1, 'O campo identificador é obrigatório'),
	name: z.string(strMessage('nome')).min(1, 'O campo nome é obrigatório'),
	phone: z.string(strMessage('telefone')).min(1, 'O campo telefone é obrigatório'),
	birthDate: z.string(strMessage('data de nascimento')).min(1, 'O campo data de nascimento é obrigatório'),
	document: z.string(strMessage('documento')).min(1, 'O campo documento é obrigatório'),
	identity: z.string(strMessage('identidade')).min(1, 'O campo identidade é obrigatório'),
	address: addressSchema,
	socials: socialsSchema,
	login: loginSchema,
});

export type FormData = z.infer<typeof schema>;

export function StudentsDataTable() {
	const router = useRouter()
	const { students, meta } = useStudents({
		pageIndex: 1,
		searchTerm: 'oi',
		sorting: [
			{
				id: 'name',
				desc: true,
			},
		],
	})

	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data: students,
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
			<div className="relative">
				<Link className="absolute -top-24 right-0" href={'newStudent'}>
					<Button>Novo aluno</Button>
				</Link>
			</div>
			<div className="flex items-center py-4">
				<Input
					placeholder="Filtrar por nome..."
					value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
					onChange={(event) =>
						table.getColumn('name')?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
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
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id === 'name' && 'Nome'}
										{column.id === 'email' && 'E-mail'}
										{column.id === 'phone' && 'Telefone'}
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


