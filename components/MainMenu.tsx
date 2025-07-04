import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';

export const MainMenu = () => {
  return (
    <View className="flex-1 bg-black px-6 py-10">
      <Text className="text-white text-3xl font-bold mb-8">Menu principal</Text>

      <Pressable className="flex-row items-center bg-neutral-900 rounded-xl p-5 mb-4 active:bg-neutral-800">
        <FontAwesome name="music" size={28} color="#facc15" />
        <Text className="text-white text-lg font-semibold ml-4">Ma bibliothèque</Text>
      </Pressable>

      <Pressable className="flex-row items-center bg-neutral-900 rounded-xl p-5 mb-4 active:bg-neutral-800">
        <FontAwesome name="search" size={28} color="#38bdf8" />
        <Text className="text-white text-lg font-semibold ml-4">Rechercher</Text>
      </Pressable>

      <Pressable className="flex-row items-center bg-neutral-900 rounded-xl p-5 mb-4 active:bg-neutral-800">
        <FontAwesome name="star" size={28} color="#f472b6" />
        <Text className="text-white text-lg font-semibold ml-4">Découvertes</Text>
      </Pressable>

      <Pressable className="flex-row items-center bg-neutral-900 rounded-xl p-5 mb-4 active:bg-neutral-800">
        <FontAwesome name="user" size={28} color="#a78bfa" />
        <Text className="text-white text-lg font-semibold ml-4">Mon profil</Text>
      </Pressable>
    </View>
  );
};
