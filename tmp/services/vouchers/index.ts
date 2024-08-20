import { create } from '@/services/vouchers/create-voucher';
import { fetch } from '@/services/vouchers/fetch-vouchers';
import { remove } from '@/services/vouchers/remove-voucher';
import { update } from '@/services/vouchers/update-voucher';

export const vouchersService = {
  create,
  fetch,
  update,
  remove,
};
