export interface IStudentReportDTO {
  id: string;
  foulsWithoutReplacement: number;
  foulsWithReplacement: number;
  month: string;
  year: string;
  priceClass: number;
  total: number;
  partialPayment: number;
  createdAt: string;
}
