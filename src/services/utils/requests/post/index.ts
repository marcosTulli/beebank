import { PostRequestParams } from '@models/interfaces';
import axios from 'axios';

export const postRequest = async <T>({
  location,
  body,
  params = {},
  headers,
}: PostRequestParams): Promise<T> => {
  if (!body) throw new Error('POST request requires a body.');

  const response = await axios.post(location, body, {
    params,
    headers,
  });

  return response.data;
};
