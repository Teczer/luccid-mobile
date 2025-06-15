import React from 'react';
import { View, Text } from 'react-native';

import { cn } from '@/utils/class-name.util';

interface GetStartedBadgeProps {
  emoji: string;
  className?: string;
  description: string;
  backgroundClass: string;
  borderColorClass: string;
}

export default function GetStartedBadge({
  backgroundClass,
  borderColorClass,
  className,
  description,
  emoji,
}: GetStartedBadgeProps) {
  return (
    <View className={cn('flex flex-row items-center justify-start gap-x-4 w-full', className)}>
      <View
        className={cn(
          'flex items-center justify-center w-16 h-16 border rounded-lg',
          backgroundClass,
          borderColorClass,
        )}
      >
        <Text className="text-3xl">{emoji}</Text>
      </View>
      <Text className="flex-1 text-white text-lg">{description}</Text>
    </View>
  );
}
