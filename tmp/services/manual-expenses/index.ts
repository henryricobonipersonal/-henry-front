import { create } from '@/services/manual-expenses/create-manual-expense';
import { fetch } from '@/services/manual-expenses/fetch-manual-expenses';
import { remove } from '@/services/manual-expenses/remove-manual-expense';
import { update } from '@/services/manual-expenses/update-manual-expense';

export const manualExpensesService = {
  create,
  fetch,
  update,
  remove,
};
