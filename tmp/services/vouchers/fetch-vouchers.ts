import type { IVoucherDTO } from '@/dtos/voucher-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
  id: string
  desc: boolean
}

export interface IVouchersSearchOptions {
  pageIndex: number
  searchTerm?: string
  sorting?: ISorting[]
}

export interface IVouchersSearchResponse {
  vouchers: IVoucherDTO[]
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
}: IVouchersSearchOptions): Promise<IVouchersSearchResponse | undefined> {
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
    `/vouchers?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
  )

  return {
    vouchers: data?.vouchers?.map((voucher: IVoucherDTO) => ({
      id: voucher.id,
      date: voucher.date,
      value: voucher.value,
    })),
    meta: {
      pageIndex: data?.meta.pageIndex,
      perPage: data.meta.perPage,
      totalCount: data?.meta.totalCount,
    },
  }
}
