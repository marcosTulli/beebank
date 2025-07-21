'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user';
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload, Roles, User } from '@models/interfaces/user';
import { useAuthTokenStore } from '@/store/auth-token';
import { Routes } from '@/models/enums/routes';

type Options = {
  redirectTo?: string;
  requireAuth?: boolean;
};

const buildUserFromToken = (authToken: string): User => {
  const data: CustomJwtPayload = jwtDecode(authToken);
  return {
    id: data.sub,
    email: data.email,
    role: data.role,
    isDefined: true,
    isAuthorized: data.role === Roles.Admin,
  };
};

export function useUser(options: Options = {}) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  const { redirectTo = Routes.auth, requireAuth = true } = options;
  const { authToken, setAuthToken } = useAuthTokenStore();
  const { storedUser, setUser } = useUserStore();

  useEffect(() => {
    if (!authToken && typeof window !== 'undefined') {
      const stored = localStorage.getItem('authToken');
      if (stored) {
        setAuthToken(stored);
      }
    }

    if (authToken && (!storedUser || !storedUser.isDefined)) {
      const userFromToken = buildUserFromToken(authToken);
      setUser({ user: userFromToken });
    }

    if (requireAuth && !authToken) {
      router.replace(redirectTo);
    }

    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken, storedUser, requireAuth, redirectTo, setAuthToken, router]);

  return { isAuthenticated: !!authToken, user: storedUser, isReady };
}
