import type { IClassReportDTO } from '@/dtos/class-report-dto';
import { httpClient } from '@/services/http-client';

type IUpdateClassReportDTO = Partial<Omit<IClassReportDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  date,
  hours,
  replaceClass,
  typeOfTraining,
  price,
  paymentStatus,
}: IUpdateClassReportDTO): Promise<IClassReportDTO> {
  const { data } = await httpClient.patch(`/class-reports/${id}`, {
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
