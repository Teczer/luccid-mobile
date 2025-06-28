import React from 'react';
import { Link } from 'expo-router';
import { Text } from 'react-native';

export const SignUpFooter = () => {
  return (
    <Text className="text-gray-200 text-center text-base">
      Already have an account?{' '}
      <Link push href={'/(auth)/login'} className="text-white font-bold">
        Sign In here!
      </Link>
    </Text>
  );
};
