import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { isPlatformIOS } from '@/utils/os';

export const useSafeArea = () => {
  const insets = useSafeAreaInsets();

  const { left: SAFE_AREA_LEFT, right: SAFE_AREA_RIGHT, top: SAFE_AREA_TOP } = insets;

  const SAFE_AREA_BOTTOM = isPlatformIOS() && insets.bottom > 0 ? insets.bottom - 16 : insets.bottom;
  const SAFE_AREA_BOTTOM_WITH_TAB_BAR = 63 + SAFE_AREA_BOTTOM;

  return {
    SAFE_AREA_BOTTOM,
    SAFE_AREA_BOTTOM_WITH_TAB_BAR,
    SAFE_AREA_LEFT,
    SAFE_AREA_RIGHT,
    SAFE_AREA_TOP,
  };
};
