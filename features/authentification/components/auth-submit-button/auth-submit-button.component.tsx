import React from 'react';
import { Pressable, Text } from 'react-native';

interface AuthSubmitButtonProps {
  loading: boolean;
  onPress: () => void;
}

export const AuthSubmitButton = ({ loading, onPress }: AuthSubmitButtonProps) => {
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      className="flex-row items-center justify-center w-full h-16 bg-white rounded-2xl transition-all active:scale-105"
    >
      <Text className="text-black text-xl font-bold">Login</Text>
    </Pressable>
  );
};
