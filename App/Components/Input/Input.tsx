import * as React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './Style';

export interface InputProps extends TextInputProps {}

export const Input = ({style, ...props}: InputProps) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};
