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
    iconName: 'flat-color-icons_google',
    iconNameActive: 'flat-color-icons_google',
    iconSize: 200,
    name: 'index',
    text: 'Accueil',
  },
  {
    href: '/(root)/(tabs)/settings',
    iconName: 'flat-color-icons_google',
    iconNameActive: 'flat-color-icons_google',
    iconSize: 200,
    name: 'settings',
    text: 'Paramètres',
  },
];
