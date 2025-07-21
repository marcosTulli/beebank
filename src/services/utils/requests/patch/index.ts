import { PatchRequestParams } from '@models/interfaces';
import axios from 'axios';

export async function patchRequest<T>({
  location,
  body,
  params,
  headers,
}: PatchRequestParams): Promise<T> {
  if (!body) throw new Error('PATCH request requires a body.');
  const response = await axios.patch(location, body, {
    params,
    headers,
  });
  return response.data;
}
