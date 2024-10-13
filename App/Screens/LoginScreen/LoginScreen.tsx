import * as React from 'react';
import {useContext} from 'react';
import {View} from 'react-native';
import {LoginForm, RegisterForm} from '../../Components';
import {styles} from './Style';
import {LoginContext} from '../../App';

interface LoginScreenProps {}

export const LoginScreen = ({}: LoginScreenProps) => {
  const {isLoginForm} = useContext(LoginContext);

  return (
    <View style={styles.mainContainer}>
      {isLoginForm ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};
