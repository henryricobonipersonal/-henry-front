import { create } from '@/services/teacher-report-list/create-teacher-report-list';
import { fetch } from '@/services/teacher-report-list/fetch-teacher-report-lists';
import { remove } from '@/services/teacher-report-list/remove-teacher-report-list';
import { update } from '@/services/teacher-report-list/update-teacher-report-list';

export const teacherReportListService = {
  create,
  fetch,
  update,
  remove,
};
