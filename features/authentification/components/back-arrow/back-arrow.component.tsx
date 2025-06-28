import React from 'react';
import { router } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const BackArrow = () => {
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/(root)');
    }
  };

  return (
    <Pressable className="absolute top-20 w-full" onPress={handleGoBack}>
      <FontAwesome name="arrow-left" size={25} color={'#fff'} />
    </Pressable>
  );
};
