import type { IStudentGoalDTO } from '@/dtos/student-goal-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IStudentGoalsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IStudentGoalsSearchResponse {
	studentGoals: IStudentGoalDTO[]
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
}: IStudentGoalsSearchOptions): Promise<IStudentGoalsSearchResponse | undefined> {
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
		`/student-goals?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		studentGoals: data?.studentGoals?.map((studentGoal: IStudentGoalDTO) => ({
			id: studentGoal.id,
			date: studentGoal.date,
			name: studentGoal.name,
			description: studentGoal.description,
			status: studentGoal.status,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
