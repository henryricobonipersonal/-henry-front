import { create } from '@/services/student-reports/create-student-report';
import { fetch } from '@/services/student-reports/fetch-student-reports';
import { remove } from '@/services/student-reports/remove-student-report';
import { update } from '@/services/student-reports/update-student-report';

export const studentReportsService = {
  create,
  fetch,
  update,
  remove,
};
