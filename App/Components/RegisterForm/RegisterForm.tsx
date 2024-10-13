import * as React from 'react';
import {useContext, useState} from 'react';
import {Alert, View} from 'react-native';
import {Text} from '../Text/Text';
import {Input} from '../Input/Input';
import {InputPassword} from '../InputPassword/InputPassword';
import {Button} from '../Button/Button';
import {styles} from './Style';
import {LoginContext} from '../../App';

interface RegisterFormProps {}

const validateEmail = (email: string) => {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateUserName = (userName: string) => {
  let re = /^[A-Za-z0-9]+$/;
  return re.test(userName);
};

export const RegisterForm = ({}: RegisterFormProps) => {
  const {setIsLoginForm, submitRegistration} = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passAgain, setPassAgain] = useState('');

  const submit = () => {
    if (!validateEmail(email)) {
      Alert.alert('Ошибка', 'Не корректный email');
      return;
    }

    if (!validateUserName(userName)) {
      Alert.alert('Ошибка', 'Не корректное имя пользователя');
      return;
    }

    if (!password) {
      Alert.alert('Ошибка', 'Введите пароль');
      return;
    }

    if (password !== passAgain) {
      Alert.alert('Ошибка', 'Пароли должны совпадать');
      return;
    }

    submitRegistration(email, userName, password);
  };

  return (
    <View>
      <Text style={[styles.separator]} size={'xl'}>
        Регистрация
      </Text>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
        style={[styles.separator]}
      />
      <Input
        value={userName}
        onChangeText={setUserName}
        placeholder={'Имя пользователя'}
        style={[styles.separator]}
      />
      <InputPassword
        value={password}
        onChangeText={setPassword}
        placeholder={'Пароль'}
        style={[styles.separator]}
      />
      <InputPassword
        value={passAgain}
        onChangeText={setPassAgain}
        placeholder={'Повторите пароль'}
        style={[styles.separator]}
      />
      <Button
        onPress={submit}
        style={[styles.loginButton, styles.separator]}
        text={'Зарегестрироваться'}
      />
      <Text
        onPress={() => {
          setIsLoginForm(true);
        }}
        size={'sm'}
        style={styles.registerTextButton}>
        Войти
      </Text>
    </View>
  );
};
