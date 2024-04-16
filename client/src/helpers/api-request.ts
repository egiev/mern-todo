import axios, { AxiosRequestConfig } from 'axios';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const getCorrectRequest = (
  method: Method,
  data: unknown = {},
): AxiosRequestConfig => {
  if (method === 'GET') {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export async function sendAPIRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const response = await axios({ url, ...getCorrectRequest(method, data) });

  return response.data as Promise<T>;
}
