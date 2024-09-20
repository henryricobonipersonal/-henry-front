import axios from 'axios';

export interface AppError {
  response: {
    data: {
      code: string;
      error: string;
      message: string;
      data: unknown;
    };
  };
}

export const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function parseError(error: AppError): Promise<string> {
  return (
    error?.response?.data?.message ??
    'Ocorreu um erro no servidor, por favor tente novamente mais tarde'
  );
}
