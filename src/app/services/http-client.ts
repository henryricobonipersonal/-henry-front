'use server'

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

httpClient.interceptors.request.use(async (config) => {
  const jwt = cookies().get('jwt');

  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt.value}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

httpClient.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  if (error.response?.status === 401) {
    return redirect('/auth/login');
  }
  return Promise.reject(error);
});

export async function parseError(error: AppError): Promise<string> {
  return (
    error?.response?.data?.message ??
    'Ocorreu um erro no servidor, por favor tente novamente mais tarde'
  );
}
