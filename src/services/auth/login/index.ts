import { AuthResponse, LoginRequest } from '@models/interfaces/auth';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const loginService = (body: LoginRequest) =>
  HttpClientInstance.post<AuthResponse>({
    location: `${baseUrl}/auth/login`,
    body,
  });
