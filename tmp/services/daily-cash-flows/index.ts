import { create } from '@/services/daily-cash-flows/create-daily-cash-flow';
import { fetch } from '@/services/daily-cash-flows/fetch-daily-cash-flows';
import { remove } from '@/services/daily-cash-flows/remove-daily-cash-flow';
import { update } from '@/services/daily-cash-flows/update-daily-cash-flow';

export const dailyCashFlowsService = {
  create,
  fetch,
  update,
  remove,
};
