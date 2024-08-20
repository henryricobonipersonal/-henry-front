import type { ITeacherReportListDTO } from '@/dtos/teacher-report-list-dto';
import { httpClient } from '@/services/http-client';

type IUpdateTeacherReportListDTO = Partial<Omit<ITeacherReportListDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  name,
}: IUpdateTeacherReportListDTO): Promise<ITeacherReportListDTO> {
  const { data } = await httpClient.patch(`/teacher-report-lists/${id}`, {
    name,
  });

  return {
    id: data.id,
    name: data.name,
    createdAt: data.createdAt,
  };
}
