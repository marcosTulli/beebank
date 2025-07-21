import { AuthResponse, SignupRequest } from '@models/interfaces/auth';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const signupService = (body: SignupRequest) =>
  HttpClientInstance.post<AuthResponse>({
    location: `${baseUrl}/auth/signup`,
    body,
  });
