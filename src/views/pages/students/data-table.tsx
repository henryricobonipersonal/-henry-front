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
import { Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@views/components/ui/pagination'



export function DataTableDemo() {
	const { isLoading, students } = useStudents()

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
									<PaginationPrevious />
								</PaginationItem>

								<PaginationItem>
									<PaginationButton isActive>1</PaginationButton>
								</PaginationItem>

								<PaginationItem>
									<PaginationButton>2</PaginationButton>
								</PaginationItem>

								<PaginationItem>
									<PaginationNext />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</TableCaption>
				</Table>
			)}
		</div>
	)
}