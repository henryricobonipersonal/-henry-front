import { useMemo } from 'react'

import { generateEllipsisPagination } from '@app/utils/generate-ellipsis-pagination'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@views/components/ui/table'
import { useStudents } from '@app/hooks/students/use-users'
import {
	Pagination,
	PaginationButton,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@views/components/ui/pagination'

export function DataTableDemo() {
	const { isLoading, students, pagination } = useStudents({ pageIndex: 1 })

	const pages = useMemo(() => {
		return generateEllipsisPagination({
			currentPage: pagination.currentPage,
			totalPages: pagination.totalPages,
		})
	}, [pagination.currentPage, pagination.totalPages])

	return (
		<div>
			{!isLoading && (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Contato</TableHead>
							<TableHead>Telefone</TableHead>
							<TableHead>Gênero</TableHead>
							<TableHead>Idade</TableHead>
							<TableHead />
						</TableRow>
					</TableHeader>

					<TableBody>
						{students.map((student) => (
							<TableRow key={student.id}>
								<TableCell className="flex items-center gap-2">
									<div>
										<strong>{student.name}</strong>
										<small className="text-muted-foreground block">{student.email}</small>
									</div>
								</TableCell>

								<TableCell>{student.phone}</TableCell>

								<TableCell>{student.gender}</TableCell>

								<TableCell>{student.birthDate}</TableCell>
							</TableRow>
						))}
					</TableBody>

					<TableCaption>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious
										onClick={pagination.previousPage}
										disabled={!pagination.hasPreviousPage}
									/>
								</PaginationItem>

								{pages.map((page) => {
									const isEllipsisPosition = typeof page === 'string'

									if (isEllipsisPosition) {
										return (
											<PaginationItem key={page}>
												<PaginationButton disabled>
													<PaginationEllipsis />
												</PaginationButton>
											</PaginationItem>
										)
									}

									return (
										<PaginationItem key={page}>
											<PaginationButton
												isActive={pagination.currentPage === page}
												onClick={() => pagination.setPage(Number(page))}
											>
												{page}
											</PaginationButton>
										</PaginationItem>
									)
								})}

								<PaginationItem>
									<PaginationNext
										onClick={pagination.nextPage}
										disabled={!pagination.hasNextPage}
									/>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</TableCaption>
				</Table>
			)}
		</div>
	)
}
