import type { IStudentGoalDTO } from '@/dtos/student-goal-dto';
import { httpClient } from '@/services/http-client';

type IUpdateStudentGoalDTO = Partial<Omit<IStudentGoalDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  date,
  name,
  description,
  status,
}: IUpdateStudentGoalDTO): Promise<IStudentGoalDTO> {
  const { data } = await httpClient.patch(`/student-goals/${id}`, {
    date,
    name,
    description,
    status,
  });

  return {
    id: data.id,
    date: data.date,
    name: data.name,
    description: data.description,
    status: data.status,
    createdAt: data.createdAt,
  };
}
