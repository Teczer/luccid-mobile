import { usePathname } from 'expo-router';
import React, { ReactNode, useEffect } from 'react';

import { useSessionStore } from '@/store/session.store';

interface CheckPermissionsProviderProps {
  children: ReactNode;
}

export const CheckPermissionsProvider = ({ children }: CheckPermissionsProviderProps) => {
  const token = useSessionStore(state => state.session?.access_token);
  const pathname = usePathname();

  useEffect(() => {
    if (token && pathname === '/') {
      console.log('ouais');
    }
  }, [token, pathname]);

  return <>{children}</>;
};
