import React from 'react';
import { Text, View } from 'react-native';

export const SignUpHeader = () => {
  return (
    <View className="w-full items-center gap-y-2">
      <Text className="text-white text-4xl font-medium">Sign Up Account</Text>
      <Text className="text-white text-lg text-center">Enter your personal information to create your account.</Text>
    </View>
  );
};
