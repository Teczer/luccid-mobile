import React from 'react';
import { Text, View } from 'react-native';

export const LoginHeader = () => {
  return (
    <View className="w-full items-center gap-y-2">
      <Text className="text-white text-4xl font-medium">Sign In Account</Text>
      <Text className="text-white text-lg">Enter your personal data to login on your account.</Text>
    </View>
  );
};
