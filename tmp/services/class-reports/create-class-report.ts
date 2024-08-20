import type { IClassReportDTO } from '@/dtos/class-report-dto';
import { httpClient } from '@/services/http-client';

type ICreateClassReportDTO = Omit<IClassReportDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  hours,
  replaceClass,
  typeOfTraining,
  price,
  paymentStatus,
}: ICreateClassReportDTO): Promise<IClassReportDTO> {
  const { data } = await httpClient.post('/class-reports', {
    date,
    hours,
    replaceClass,
    typeOfTraining,
    price,
    paymentStatus,
  });

  return {
    id: data.id,
    date: data.date,
    hours: data.hours,
    replaceClass: data.replaceClass,
    typeOfTraining: data.typeOfTraining,
    price: data.price,
    paymentStatus: data.paymentStatus,
    createdAt: data.createdAt,
  };
}
