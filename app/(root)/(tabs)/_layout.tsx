import { Redirect, Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import { useAuth } from '@/providers/auth-provider';

export default function TabLayout() {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href={'/(auth)'} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#facc15', // couleur active
        tabBarInactiveTintColor: '#a3a3a3', // couleur inactive
        tabBarStyle: { backgroundColor: '#18181b' }, // fond de la tab bar
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused, size }) => <FontAwesome name="home" size={size} color={color} />,
          title: 'Accueil',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, focused, size }) => <FontAwesome name="cog" size={size} color={color} />,
          title: 'Paramètres',
        }}
      />
    </Tabs>
  );
}
