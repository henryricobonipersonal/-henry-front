import { create } from '@/services/physical-assessment-history/create-physical-assessment-history';
import { fetch } from '@/services/physical-assessment-history/fetch-physical-assessment-history';
import { remove } from '@/services/physical-assessment-history/remove-physical-assessment-history';
import { update } from '@/services/physical-assessment-history/update-physical-assessment-history';

export const physicalAssessmentHistoryService = {
  create,
  fetch,
  update,
  remove,
};
