import type { ITeacherDTO } from '@/dtos/teacher-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface ITeachersSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface ITeachersSearchResponse {
	teachers: ITeacherDTO[]
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
}: ITeachersSearchOptions): Promise<ITeachersSearchResponse | undefined> {
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
		`/teachers?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		teachers: data?.teachers?.map((teacher: ITeacherDTO) => ({
			id: teacher.id,
			name: teacher.name,
			phone: teacher.phone,
			birthDate: teacher.birthDate,
			document: teacher.document,
			identity: teacher.identity,
			price: teacher.price,
			address: teacher.address,
			socials: teacher.socials,
			login: teacher.login,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
