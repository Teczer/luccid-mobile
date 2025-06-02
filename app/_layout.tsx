import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import '../global.css';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import Auth from '@/components/Auth';
import { supabase } from '@/lib/supabase';
import Account from '@/components/Account';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up the listener on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!loaded) {
    return null;
  }

  // Affiche Auth ou Account selon la session
  return <AuthGate session={session} />;
}

function AuthGate({ session }: { session: Session | null }) {
  if (!session) {
    return <Auth />;
  }
  return <Account session={session} />;
}
