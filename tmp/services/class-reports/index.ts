import { create } from '@/services/class-reports/create-class-report';
import { fetch } from '@/services/class-reports/fetch-class-reports';
import { remove } from '@/services/class-reports/remove-class-report';
import { update } from '@/services/class-reports/update-class-report';

export const classReportsService = {
  create,
  fetch,
  update,
  remove,
};
