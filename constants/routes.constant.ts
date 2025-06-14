import { Href } from 'expo-router';

import { TabBarBottomItemProps } from '@/components/navigation/tab-bar-bottom/tab-bar-bottom-item.component';

export type TabRouteNames = 'index' | 'settings';

interface TabRoutes extends TabBarBottomItemProps {
  href: Href;
  name: TabRouteNames;
}

export const TAB_ROUTES: TabRoutes[] = [
  {
    href: '/(root)/(tabs)',
    iconName: 'tab-bar-home',
    iconNameActive: 'tab-bar-home-active',
    iconSize: 24,
    name: 'index',
    text: 'Menu',
  },
  {
    href: '/(root)/(tabs)/settings',
    iconName: 'tab-bar-settings',
    iconNameActive: 'tab-bar-setings-active',
    iconSize: 22,
    name: 'settings',
    text: 'Paramètres',
  },
];
