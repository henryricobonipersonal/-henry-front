import type { ITeacherReportListDTO } from '@/dtos/teacher-report-list-dto';
import { httpClient } from '@/services/http-client';

type ICreateTeacherReportListDTO = Omit<ITeacherReportListDTO, 'id' | 'createdAt'>;

export async function create({
  name,
}: ICreateTeacherReportListDTO): Promise<ITeacherReportListDTO> {
  const { data } = await httpClient.post('/teacher-report-lists', {
    name,
  });

  return {
    id: data.id,
    name: data.name,
    createdAt: data.createdAt,
  };
}
