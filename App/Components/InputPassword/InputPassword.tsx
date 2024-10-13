import * as React from 'react';
import {useState} from 'react';
import {Input, InputProps} from '../Input/Input';
import {Pressable, View} from 'react-native';
import {EyeOffIcon, EyeOnIcon} from '../Icons';
import {styles} from './Style';

interface InputPasswordProps extends InputProps {}

export const InputPassword = ({style, ...props}: InputPasswordProps) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const onPressChangePassVisible = () => {
    setIsPassVisible(value => !value);
  };

  return (
    <View style={[styles.container, style]}>
      <Input
        style={[styles.input]}
        secureTextEntry={!isPassVisible}
        {...props}
      />
      <Pressable onPress={onPressChangePassVisible}>
        {isPassVisible ? <EyeOffIcon size={30} /> : <EyeOnIcon size={30} />}
      </Pressable>
    </View>
  );
};
