export interface ITeacherReportDTO {
  id: string;
  month: string;
  year: string;
  totalNumberOfClasses: number;
  priceClass: number;
  total: number;
  vale: number;
  dateVale: string;
  totalReceivable: number;
  profitEstimate: number;
  createdAt: string;
}
