import type { IPhysicalAssessmentHistoryDTO } from '@/dtos/physical-assessment-history-dto';
import { httpClient } from '@/services/http-client';

type ICreatePhysicalAssessmentHistoryDTO = Omit<IPhysicalAssessmentHistoryDTO, 'id' | 'createdAt'>;

export async function create({
  data,
  goalAchieved,
}: ICreatePhysicalAssessmentHistoryDTO): Promise<IPhysicalAssessmentHistoryDTO> {
  const { data: responseData } = await httpClient.post('/physical-assessment-history', {
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
