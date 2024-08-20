import type { IClassReportDTO } from '@/dtos/class-report-dto'
import { httpClient } from '@/services/http-client'

interface ISorting {
	id: string
	desc: boolean
}

export interface IClassReportsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IClassReportsSearchResponse {
	classReports: IClassReportDTO[]
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
}: IClassReportsSearchOptions): Promise<IClassReportsSearchResponse | undefined> {
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
		`/class-reports?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		classReports: data?.classReports?.map((classReport: IClassReportDTO) => ({
			id: classReport.id,
			date: classReport.date,
			hours: classReport.hours,
			replaceClass: classReport.replaceClass,
			typeOfTraining: classReport.typeOfTraining,
			price: classReport.price,
			paymentStatus: classReport.paymentStatus,
			createdAt: classReport.createdAt,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
