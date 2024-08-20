import type { IStudentReportDTO } from '@/dtos/student-report-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IStudentReportsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IStudentReportsSearchResponse {
	studentReports: IStudentReportDTO[]
	meta: {
		pageIndex: number
		perPage: number
		totalCount: number
	}
}

export async function fetch({
	pageIndex,
	searchTerm,
	sorting,
}: IStudentReportsSearchOptions): Promise<IStudentReportsSearchResponse | undefined> {
	const normalizeSorting = (sorting: ISorting[] | undefined): string => {
		if (!sorting || sorting.length === 0) return ''

		const normalizedSorting = sorting[0].id
		return normalizedSorting
	}

	const searchTermQuery = searchTerm ? `&searchTerm=${searchTerm}` : ''
	const sortingQuery = sorting
		? `&sortingField=${normalizeSorting(sorting)}&orderBy=${sorting[0].desc ? 'desc' : 'asc'}`
		: ''

	const { data } = await httpClient.get(
		`/student-reports?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		studentReports: data?.studentReports?.map((studentReport: IStudentReportDTO) => ({
			id: studentReport.id,
			foulsWithoutReplacement: studentReport.foulsWithoutReplacement,
			foulsWithReplacement: studentReport.foulsWithReplacement,
			month: studentReport.month,
			year: studentReport.year,
			priceClass: studentReport.priceClass,
			total: studentReport.total,
			partialPayment: studentReport.partialPayment,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
