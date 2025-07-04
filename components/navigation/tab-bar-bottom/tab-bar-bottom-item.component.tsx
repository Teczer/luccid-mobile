import React, { forwardRef, Ref } from 'react';
import { Pressable, Text, View } from 'react-native';
import { TabTriggerSlotProps } from 'expo-router/ui';

import { useSafeArea } from '@/hooks/safe-area.hook';
import { TabRouteNames } from '@/constants/routes.constant';
import { Icon, IconProps } from '@/components/icon/icon.component';

export interface TabBarBottomItemProps {
  text: string;
  iconSize: number;
  name: TabRouteNames;
  iconName: IconProps['name'];
  iconNameActive: IconProps['name'];
}

export const TabBarBottomItem = forwardRef((props: TabBarBottomItemProps & TabTriggerSlotProps, ref: Ref<View>) => {
  const { iconName, iconNameActive, iconSize, isFocused, onPress, text } = props;

  const { SAFE_AREA_BOTTOM } = useSafeArea();
  const marginBottom = SAFE_AREA_BOTTOM > 0 ? SAFE_AREA_BOTTOM - 14 : SAFE_AREA_BOTTOM;
  return (
    <Pressable onPress={onPress} style={{ marginBottom }} className="relative items-center flex-1 py-3 ">
      <View className="flex-row items-center h-6 mb-1.5">
        <Icon
          name={isFocused ? iconNameActive : iconName}
          customSize={iconSize}
          color={isFocused ? 'actionActive' : 'contentPrimary'}
        />
      </View>
      <Text>{text}</Text>
    </Pressable>
  );
});

TabBarBottomItem.displayName = 'TabBarBottomItem';
