import * as React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import {Text} from '../Text/Text';
import {styles} from './Style';

interface ButtonProps {
  text?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = ({text, style, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text size={'sm'}>{text}</Text>
    </Pressable>
  );
};
