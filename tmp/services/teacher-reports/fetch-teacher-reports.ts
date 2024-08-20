import type { ITeacherReportDTO } from '@/dtos/teacher-report-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface ITeacherReportsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface ITeacherReportsSearchResponse {
	teacherReports: ITeacherReportDTO[]
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
}: ITeacherReportsSearchOptions): Promise<ITeacherReportsSearchResponse | undefined> {
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
		`/teacher-reports?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		teacherReports: data?.teacherReports?.map((teacherReport: ITeacherReportDTO) => ({
			id: teacherReport.id,
			month: teacherReport.month,
			year: teacherReport.year,
			totalNumberOfClasses: teacherReport.totalNumberOfClasses,
			priceClass: teacherReport.priceClass,
			total: teacherReport.total,
			vale: teacherReport.vale,
			dateVale: teacherReport.dateVale,
			totalReceivable: teacherReport.totalReceivable,
			profitEstimate: teacherReport.profitEstimate,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
