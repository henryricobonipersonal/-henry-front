import type { IStudentReportDTO } from '@/dtos/student-report-dto';
import { httpClient } from '@/services/http-client';

type ICreateStudentReportDTO = Omit<IStudentReportDTO, 'id' | 'createdAt'>;

export async function create({
  foulsWithoutReplacement,
  foulsWithReplacement,
  month,
  year,
  priceClass,
  total,
  partialPayment,
}: ICreateStudentReportDTO): Promise<IStudentReportDTO> {
  const { data } = await httpClient.post('/student-reports', {
    foulsWithoutReplacement,
    foulsWithReplacement,
    month,
    year,
    priceClass,
    total,
    partialPayment,
  });

  return {
    id: data.id,
    foulsWithoutReplacement: data.foulsWithoutReplacement,
    foulsWithReplacement: data.foulsWithReplacement,
    month: data.month,
    year: data.year,
    priceClass: data.priceClass,
    total: data.total,
    partialPayment: data.partialPayment,
    createdAt: data.createdAt,
  };
}
