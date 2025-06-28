import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { Icon } from '@/components/icon/icon.component';

export const AuthProvidersButtons = () => {
  return (
    <View className="w-full flex flex-row gap-x-4">
      <Pressable
        // disabled={loading}
        onPress={() => {}}
        className="flex-1 flex-row items-center justify-center h-16 border border-[#453d54] bg-transparent rounded-2xl gap-x-2"
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <Icon name="flat-color-icons_google" color={'#fff'} />
        <Text className="text-white text-xl font-semibold">Google</Text>
      </Pressable>

      <Pressable
        // disabled={loading}
        onPress={() => {}}
        className="flex-1 flex-row items-center justify-center h-16 border border-[#453d54] bg-transparent rounded-2xl gap-x-2"
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <FontAwesome name="apple" size={20} color={'#fff'} />
        <Text className="text-white text-xl font-semibold">Apple</Text>
      </Pressable>
    </View>
  );
};
