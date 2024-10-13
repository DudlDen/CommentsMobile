import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SendIcon = ({color, size}: {color?: string; size?: number}) => (
  <Svg width={size || 24} height={size || 24} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color || '#333'}
      fillRule="evenodd"
      d="m9.941 12.646-2.247-.749c-2.353-.784-3.53-1.176-3.53-1.897 0-.72 1.177-1.113 3.53-1.898l8.513-2.837c1.656-.552 2.484-.828 2.92-.391.438.437.162 1.265-.39 2.92l-2.838 8.514c-.784 2.353-1.176 3.53-1.897 3.53-.721 0-1.113-1.177-1.898-3.53l-.749-2.248 4.354-4.353a1 1 0 0 0-1.414-1.414L9.94 12.646Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SendIcon;
