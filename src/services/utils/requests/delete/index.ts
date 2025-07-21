import { DeleteRequestParams } from '@models/interfaces';
import axios from 'axios';

export async function deleteRequest<T>({
  location,
  params,
  headers,
}: DeleteRequestParams): Promise<T> {
  const response = await axios.delete(location, {
    params,
    headers,
  });
  return response.data;
}
