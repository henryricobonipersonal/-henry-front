import { create } from '@/services/goals/create-goal';
import { fetch } from '@/services/goals/fetch-goals';
import { remove } from '@/services/goals/remove-goal';
import { update } from '@/services/goals/update-goal';

export const goalsService = {
  create,
  fetch,
  update,
  remove,
};
