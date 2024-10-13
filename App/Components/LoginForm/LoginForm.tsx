import * as React from 'react';
import {useContext, useState} from 'react';
import {View} from 'react-native';
import {Text} from '../Text/Text';
import {Input} from '../Input/Input';
import {styles} from './Style';
import {InputPassword} from '../InputPassword/InputPassword';
import {Button} from '../Button/Button';
import {LoginContext} from '../../App';

interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  const {setIsLoginForm, submitLogin} = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    submitLogin(email, password);
  };
  return (
    <View>
      <Text style={[styles.separator]} size={'xl'}>
        Авторизация
      </Text>
      <Input
        onChangeText={setEmail}
        value={email}
        placeholder={'Email'}
        style={[styles.separator]}
      />
      <InputPassword
        value={password}
        onChangeText={setPassword}
        placeholder={'Пароль'}
        style={[styles.separator]}
      />
      <Button
        onPress={submit}
        style={[styles.loginButton, styles.separator]}
        text={'Войти'}
      />
      <Text
        onPress={() => {
          setIsLoginForm(false);
        }}
        size={'sm'}
        style={styles.registerTextButton}>
        Зарегестрироваться
      </Text>
    </View>
  );
};
