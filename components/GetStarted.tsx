import React from 'react';
import { View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GetStarted() {
  const image = require('../assets/images/bg-song-choicer.png');
  return (
    <View className="h-full w-full flex items-center justify-center bg-dark">
      <ImageBackground source={image} resizeMode="cover" className="w-full h-full">
        <LinearGradient
          colors={['rgba(10,10,10,0.2)', 'rgba(10,10,10,1)']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{ height: '100%', position: 'absolute', width: '100%' }}
        />
      </ImageBackground>
    </View>
  );
}
