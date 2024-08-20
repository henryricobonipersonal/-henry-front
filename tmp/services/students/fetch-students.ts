import type { IStudentDTO } from '@/dtos/student-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IStudentsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IStudentsSearchResponse {
	students: IStudentDTO[]
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
}: IStudentsSearchOptions): Promise<IStudentsSearchResponse | undefined> {
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
		`/students?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		students: data?.students?.map((student: IStudentDTO) => ({
			id: student.id,
			name: student.name,
			phone: student.phone,
			birthDate: student.birthDate,
			document: student.document,
			identity: student.identity,
			address: student.address,
			socials: student.socials,
			login: student.login,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
