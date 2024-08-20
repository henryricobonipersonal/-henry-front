import type { ITeacherReportDTO } from '@/dtos/teacher-report-dto';
import { httpClient } from '@/services/http-client';

type ICreateTeacherReportDTO = Omit<ITeacherReportDTO, 'id' | 'createdAt'>;

export async function create({
  month,
  year,
  totalNumberOfClasses,
  priceClass,
  total,
  vale,
  dateVale,
  totalReceivable,
  profitEstimate,
}: ICreateTeacherReportDTO): Promise<ITeacherReportDTO> {
  const { data } = await httpClient.post('/teacher-reports', {
    month,
    year,
    totalNumberOfClasses,
    priceClass,
    total,
    vale,
    dateVale,
    totalReceivable,
    profitEstimate,
  });

  return {
    id: data.id,
    month: data.month,
    year: data.year,
    totalNumberOfClasses: data.totalNumberOfClasses,
    priceClass: data.priceClass,
    total: data.total,
    vale: data.vale,
    dateVale: data.dateVale,
    totalReceivable: data.totalReceivable,
    profitEstimate: data.profitEstimate,
    createdAt: data.createdAt,
  };
}
