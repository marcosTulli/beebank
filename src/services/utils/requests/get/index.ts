import axios from 'axios';
import { GetRequestParams } from '@models/interfaces';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export async function getRequest<T>({
  location,
  params,
  headers,
}: GetRequestParams): Promise<T> {
  const response = await axios.get(baseUrl + location, {
    params,
    headers,
    paramsSerializer: {
      encode: (params) => params,
    },
  });
  return response.data;
}
