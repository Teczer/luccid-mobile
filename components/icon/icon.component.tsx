import { cssInterop } from 'nativewind';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { ICONS, TIcons } from '../../constants/icons.constant';

export type IconProps = {
  name: keyof TIcons;
  customSize?: number;
} & SvgProps;

cssInterop(Svg, {
  className: {
    target: 'style',
  },
});

export const Icon = ({ className, color, customSize, height, name, width, ...rest }: IconProps) => {
  const sizeInPx =
    customSize ?? (typeof width === 'number' ? width : undefined) ?? (typeof height === 'number' ? height : 20);

  const iconData = ICONS[name];
  const viewBox = iconData?.viewBox ?? '0 0 20 20';
  const viewBoxArray = viewBox.split(' ');
  const iconWidth = parseInt(viewBoxArray[2] || '20', 10);
  const iconHeight = parseInt(viewBoxArray[3] || '20', 10);
  const computedWidth = (iconWidth * sizeInPx) / iconHeight;

  if (!iconData) return null;

  return (
    <Svg
      className={className}
      focusable={false}
      viewBox={viewBox}
      width={computedWidth}
      height={sizeInPx}
      fill={color}
      {...rest}
    >
      {iconData.path.map((d, index) => (
        <Path key={index} d={d} />
      ))}
    </Svg>
  );
};
