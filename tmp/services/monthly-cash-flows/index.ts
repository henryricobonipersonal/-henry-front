import { create } from '@/services/monthly-cash-flows/create-monthly-cash-flow';
import { fetch } from '@/services/monthly-cash-flows/fetch-monthly-cash-flows';
import { remove } from '@/services/monthly-cash-flows/remove-monthly-cash-flow';
import { update } from '@/services/monthly-cash-flows/update-monthly-cash-flow';

export const monthlyCashFlowsService = {
  create,
  fetch,
  update,
  remove,
};
