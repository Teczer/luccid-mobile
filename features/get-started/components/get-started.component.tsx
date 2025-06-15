import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, ImageBackground, Text } from 'react-native';

export default function GetStarted() {
  const image = require('../../../assets/images/bg-song-choicer.png');
  return (
    <View className="relative h-full w-full bg-transparent">
      <ImageBackground source={image} resizeMode="cover" className="w-full h-1/2 absolute z-0 top-0" />
      <LinearGradient
        colors={[
          'rgba(10,10,10,0)', // 0% - transparent
          'rgba(10,10,10,1)', // 27% - opaque
          'rgba(10,10,10,1)', // 100% - opaque
        ]}
        locations={[0, 0.27, 1]}
        style={{
          height: '100%',
          position: 'absolute',
          width: '100%',
          zIndex: 0,
        }}
      />
      <View className="bg-transparent w-full h-[30%]"></View>

      <View className="bg-transparent w-full h-full flex items-center justify-start gap-y-10 px-10">
        <Text className="text-white text-center text-3xl font-bold font-mono">Welcome to Luccid!</Text>

        <View className="flex flex-row items-center justify-start gap-x-4 border border-red-500 w-full">
          <View className="flex items-center justify-center w-20 h-20 bg-fuchsia-950 border border-purple-700 rounded-lg">
            <Text className="text-4xl">🎤</Text>
          </View>
          <Text className="text-white text-lg">Classez vos musiques</Text>
        </View>
      </View>
    </View>
  );
}
