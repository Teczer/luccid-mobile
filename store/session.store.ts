import { create } from 'zustand';
import { Session } from '@supabase/supabase-js';
import { createJSONStorage, persist } from 'zustand/middleware';

import { mmkvStorage } from '@/lib/mmkv';

interface IAuthState {
  session: Session | null;
}

interface IAuthActions {
  reset: () => void;
  setSession: (session: Session | null) => void;
}

const defaultState: IAuthState = {
  session: null,
};

export const useSessionStore = create(
  persist<IAuthState & IAuthActions>(
    set => ({
      ...defaultState,
      reset: () => set({ ...defaultState }),
      setSession: session => set({ session }),
    }),
    {
      name: 'session',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
