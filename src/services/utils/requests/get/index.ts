import axios from 'axios';
import { GetRequestParams } from '@models/interfaces';


export async function getRequest<T>({
  params,
  headers,
  url
}: GetRequestParams): Promise<T> {
  const response = await axios.get(url, {
    params,
    headers,
    paramsSerializer: {
      encode: (params) => params,
    },
  });
  return response.data;
}
