import type { IPhysicalAssessmentHistoryDTO } from '@/dtos/physical-assessment-history-dto';
import { httpClient } from '@/services/http-client';

type IUpdatePhysicalAssessmentHistoryDTO = Partial<Omit<IPhysicalAssessmentHistoryDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  data,
  goalAchieved,
}: IUpdatePhysicalAssessmentHistoryDTO): Promise<IPhysicalAssessmentHistoryDTO> {
  const { data: responseData } = await httpClient.patch(`/physical-assessment-history/${id}`, {
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
