import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIcon = ({color, size}: {color?: string; size?: number}) => (
  <Svg width={size || 24} height={size || 24} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color || '#333'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18M6 6l12 12"
    />
  </Svg>
);
export default CloseIcon;
