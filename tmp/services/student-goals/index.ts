import { create } from '@/services/student-goals/create-student-goal';
import { fetch } from '@/services/student-goals/fetch-student-goals';
import { remove } from '@/services/student-goals/remove-student-goal';
import { update } from '@/services/student-goals/update-student-goal';

export const studentGoalsService = {
  create,
  fetch,
  update,
  remove,
};
