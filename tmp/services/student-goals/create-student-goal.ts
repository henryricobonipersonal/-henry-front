import type { IStudentGoalDTO } from '@/dtos/student-goal-dto';
import { httpClient } from '@/services/http-client';

type ICreateStudentGoalDTO = Omit<IStudentGoalDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  name,
  description,
  status,
}: ICreateStudentGoalDTO): Promise<IStudentGoalDTO> {
  const { data } = await httpClient.post('/student-goals', {
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
