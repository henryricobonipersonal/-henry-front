import { create } from '@/services/students/create-student';
import { fetch } from '@/services/students/fetch-students';
import { remove } from '@/services/students/remove-student';
import { update } from '@/services/students/update-student';

export const studentsService = {
  create,
  fetch,
  update,
  remove,
};
