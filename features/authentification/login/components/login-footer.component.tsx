import React from 'react';
import { Link } from 'expo-router';
import { Text } from 'react-native';

export const LoginFooter = () => {
  return (
    <Text className="text-gray-200 text-center text-base">
      Doesn't have an account?{' '}
      <Link href={'/(auth)/register'} className="text-white font-bold">
        Sign up here!
      </Link>
    </Text>
  );
};
