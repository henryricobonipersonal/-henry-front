import type { IGoalDTO } from '@/dtos/goal-dto';
import { httpClient } from '@/services/http-client';

type ICreateGoalDTO = Omit<IGoalDTO, 'id' | 'createdAt'>;

export async function create({
  data,
  goalAchieved,
}: ICreateGoalDTO): Promise<IGoalDTO> {
  const { data: responseData } = await httpClient.post('/goals', {
    data,
    goalAchieved,
  });

  return {
    id: responseData.id,
    data: responseData.data,
    goalAchieved: responseData.goalAchieved,
    createdAt: responseData.createdAt,
  };
}
