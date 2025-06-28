import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, ImageBackground, Text, Image } from 'react-native';

import GetStartedBadge from '@/features/get-started/components/get-started-badge.component';
import GetStartedFooter from '@/features/get-started/components/get-started-footer.component';

type BadgeData = {
  backgroundClass: string;
  borderColorClass: string;
  emoji: string;
  description: string;
};

const BADGES: BadgeData[] = [
  {
    backgroundClass: 'bg-purple-950',
    borderColorClass: 'border-purple-800',
    description: 'Explorez la discographie complète de vos artistes préférés',
    emoji: '💿',
  },
  {
    backgroundClass: 'bg-blue-950',
    borderColorClass: 'border-blue-800',
    description: 'Faites s’affronter les musiques pour établir votre classement personnel',
    emoji: '🏆',
  },
  {
    backgroundClass: 'bg-emerald-950',
    borderColorClass: 'border-emerald-800',
    description: 'Partagez votre profil avec vos amis et comparez vos classements',
    emoji: '🤝',
  },
];

export default function GetStarted() {
  const songChoicerImage = require('../../../assets/images/song-choicer.png');
  const backgroundImage = require('../../../assets/images/bg-song-choicer.png');

  return (
    <View className="relative h-full w-full bg-transparent">
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        blurRadius={3}
        className="w-full h-1/2 absolute z-0 top-0"
      />
      <LinearGradient
        colors={[
          'rgba(10,10,10,0)', // 0% - transparent
          'rgba(10,10,10,1)', // 27% - opaque
          'rgba(10,10,10,1)', // 100% - opaque
        ]}
        locations={[0, 0.4, 1]}
        style={{
          height: '100%',
          position: 'absolute',
          width: '100%',
          zIndex: 0,
        }}
      />
      <View className="bg-transparent w-full h-[20%]"></View>
      <View className="bg-transparent w-full h-full flex items-center justify-start gap-y-10 px-10 bg-">
        <View
          className="w-20 h-20"
          style={{
            shadowColor: '#ffffff',
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image source={songChoicerImage} className="w-full h-full" />
        </View>
        <Text className="text-white text-center text-3xl font-bold font-mono mb-10">Welcome to Song Choicer!</Text>

        <View className="flex w-full h-auto gap-y-10 mb-20">
          {BADGES.map((badge, idx) => (
            <GetStartedBadge
              key={idx}
              backgroundClass={badge.backgroundClass}
              borderColorClass={badge.borderColorClass}
              emoji={badge.emoji}
              description={badge.description}
            />
          ))}
        </View>

        <GetStartedFooter />
      </View>
    </View>
  );
}
