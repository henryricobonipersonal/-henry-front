import type { IGoalDTO } from '@/dtos/goal-dto';
import { httpClient } from '@/services/http-client';

type IUpdateGoalDTO = Partial<Omit<IGoalDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  data,
  goalAchieved,
}: IUpdateGoalDTO): Promise<IGoalDTO> {
  const { data: responseData } = await httpClient.patch(`/goals/${id}`, {
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
