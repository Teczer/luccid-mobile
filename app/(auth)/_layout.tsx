import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/providers/auth-provider';

export default function AuthLayout() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={'/(root)/(tabs)/settings'} />;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#fff' },
        headerShown: false,
      }}
    />
  );
}
