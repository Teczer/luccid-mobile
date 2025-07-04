import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        contentStyle: { backgroundColor: '#fff' },
        headerShown: false,
      }}
    ></Stack>
  );
}
