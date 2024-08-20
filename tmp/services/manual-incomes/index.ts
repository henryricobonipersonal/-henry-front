import { create } from '@/services/manual-incomes/create-manual-income';
import { fetch } from '@/services/manual-incomes/fetch-manual-incomes';
import { remove } from '@/services/manual-incomes/remove-manual-income';
import { update } from '@/services/manual-incomes/update-manual-income';

export const manualIncomesService = {
  create,
  fetch,
  update,
  remove,
};
