import { Session } from '@supabase/supabase-js';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

import { supabase } from '@/lib/supabase';

type AuthContextType = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  reset: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSessionState] = useState<Session | null>(null);

  const setSession = useCallback((session: Session | null) => {
    setSessionState(session);
  }, []);

  const reset = useCallback(() => {
    setSessionState(null);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [setSession]);

  return <AuthContext.Provider value={{ reset, session, setSession }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
