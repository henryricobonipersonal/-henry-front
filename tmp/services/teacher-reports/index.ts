import { create } from '@/services/teacher-reports/create-teacher-report';
import { fetch } from '@/services/teacher-reports/fetch-teacher-reports';
import { remove } from '@/services/teacher-reports/remove-teacher-report';
import { update } from '@/services/teacher-reports/update-teacher-report';

export const teacherReportsService = {
  create,
  fetch,
  update,
  remove,
};
