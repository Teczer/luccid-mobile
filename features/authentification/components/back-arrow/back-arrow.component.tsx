import React from 'react';
import { router } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const BackArrow = () => {
  return (
    <Pressable className="absolute top-20 w-full" onPress={() => router.back()}>
      <FontAwesome name="arrow-left" size={25} color={'#fff'} />
    </Pressable>
  );
};
