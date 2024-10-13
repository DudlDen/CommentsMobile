import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {styles} from './Style';

const $sizeStyles = {
  xl: {fontSize: 24, lineHeight: 34, fontWeight: '700'} as TextStyle,
  lg: {fontSize: 20, lineHeight: 32, fontWeight: '700'} as TextStyle,
  md: {fontSize: 18, lineHeight: 24, fontWeight: '700'} as TextStyle,
  sm: {fontSize: 16, lineHeight: 24, fontWeight: '600'} as TextStyle,
  xs: {fontSize: 14, lineHeight: 21, fontWeight: '500'} as TextStyle,
};

interface TextProps extends RNTextProps {
  size?: keyof typeof $sizeStyles;
}

export const Text = ({style, size = 'xs', ...props}: TextProps) => {
  return <RNText style={[styles.text, $sizeStyles[size], style]} {...props} />;
};
