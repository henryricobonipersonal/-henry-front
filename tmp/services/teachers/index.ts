import { create } from '@/services/teachers/create-teacher';
import { fetch } from '@/services/teachers/fetch-teachers';
import { remove } from '@/services/teachers/remove-teacher';
import { update } from '@/services/teachers/update-teacher';

export const teachersService = {
  create,
  fetch,
  update,
  remove,
};
