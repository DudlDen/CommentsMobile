import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EyeOffIcon = ({color, size}: {color?: string; size?: number}) => (
  <Svg width={size || 24} height={size || 24} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color || '#333'}
      fillRule="evenodd"
      d="M18.238 15.116a19.469 19.469 0 0 0 1.95-2.05c.389-.472.583-.707.583-1.066 0-.359-.194-.594-.582-1.066C18.769 9.21 15.636 6 12 6c-.84 0-1.652.171-2.423.456l2.547 2.547a3 3 0 0 1 2.873 2.873l3.24 3.24Zm-8.844-4.602a3 3 0 0 0 4.092 4.092l2.302 2.303C14.637 17.555 13.354 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.583-.707-.583-1.066 0-.359.195-.594.583-1.066.673-.817 1.732-1.97 3.046-2.954l2.535 2.534Z"
      clipRule="evenodd"
    />
    <Path stroke="#333" strokeWidth={2} d="m5 2 16 16" />
  </Svg>
);
export default EyeOffIcon;
