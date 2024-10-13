import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EyeOnIcon = ({color, size}: {color?: string; size?: number}) => (
  <Svg width={size || 24} height={size || 24} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color || '#333'}
      fillRule="evenodd"
      d="M20.771 12c0-.359-.194-.594-.582-1.066C18.769 9.21 15.636 6 12 6c-3.636 0-6.768 3.21-8.188 4.934-.388.472-.583.707-.583 1.066 0 .359.195.594.583 1.066C5.233 14.79 8.365 18 12 18c3.636 0 6.768-3.21 8.188-4.934.388-.472.582-.707.582-1.066Zm-8.77 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default EyeOnIcon;
