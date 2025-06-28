import React from 'react';
import { Link, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function GetStartedFooter() {
  function navigateToRegister() {
    router.push('/(auth)/register');
  }

  return (
    <View className="flex items-center justify-center gap-y-4 w-full h-auto">
      <Pressable
        onPress={navigateToRegister}
        className="flex-row items-center justify-center w-full h-16 bg-white rounded-lg transition-all active:scale-105"
      >
        <Text className="text-black text-xl font-bold">Commencer</Text>
      </Pressable>

      <Text className="text-gray-400 text-center text-sm mt-2">
        Déjà inscrit ?{' '}
        <Link href={'/(auth)/login'} className="text-white font-bold">
          Connectez-vous
        </Link>
      </Text>
    </View>
  );
}
