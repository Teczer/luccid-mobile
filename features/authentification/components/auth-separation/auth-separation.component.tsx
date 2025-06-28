import React from 'react';
import { Text, View } from 'react-native';

export const AuthSeparation = () => {
  return (
    <View className="w-full flex-row items-center gap-x-4">
      <View className="flex-1 h-[1px] bg-[#323232]" />
      <Text className="text-white text-xl font-light">Or</Text>
      <View className="flex-1 h-[1px] bg-[#323232]" />
    </View>
  );
};
