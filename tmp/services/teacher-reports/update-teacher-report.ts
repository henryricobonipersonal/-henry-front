import type { ITeacherReportDTO } from '@/dtos/teacher-report-dto';
import { httpClient } from '@/services/http-client';

type IUpdateTeacherReportDTO = Partial<Omit<ITeacherReportDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  month,
  year,
  totalNumberOfClasses,
  priceClass,
  total,
  vale,
  dateVale,
  totalReceivable,
  profitEstimate,
}: IUpdateTeacherReportDTO): Promise<ITeacherReportDTO> {
  const { data } = await httpClient.patch(`/teacher-reports/${id}`, {
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
