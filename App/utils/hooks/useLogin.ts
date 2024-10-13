import {useEffect, useState} from 'react';
import {database} from '../../../index';
import {Q} from '@nozbe/watermelondb';
import {Alert} from 'react-native';
import User, {USERS_TABLE} from '../../database/model/User';
import {Base64} from 'js-base64';
import {IUser} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLogin() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('user').then(res => {
      if (res) {
        setUser(JSON.parse(res) as IUser);
      }
    });
  }, []);

  const submitRegistration = async (
    email: string,
    username: string,
    password: string,
  ) => {
    const existingUser = await database.collections
      .get<User>(USERS_TABLE)
      .query(Q.where('email', email))
      .fetch();
    if (existingUser.length > 0) {
      Alert.alert('Ошибка', 'Пользователь с таким email уже существует');
      return;
    }

    const hashedPassword = Base64.encode(password);
    await database.write(async () => {
      const newUser = await database.collections
        .get<User>(USERS_TABLE)
        .create(user => {
          user.username = username;
          user.email = email.toLowerCase();
          user.password = hashedPassword;
        });

      setUser({
        username: newUser.username,
        email: newUser.email,
        id: newUser.id,
      });

      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          username: newUser.username,
          email: newUser.email,
          id: newUser.id,
        }),
      );
    });
  };

  const submitLogin = async (email: string, password: string) => {
    const user = await database.collections
      .get<User>(USERS_TABLE)
      .query(Q.where('email', email.toLowerCase()))
      .fetch();

    if (user.length === 0) {
      Alert.alert('Ошибка', 'Пользователь не найден');
    }

    const existingUser = user[0];

    const isPasswordValid = Base64.encode(password) === existingUser.password;

    if (!isPasswordValid) {
      Alert.alert('Ошибка', 'Неверный пароль');
    }

    setUser({
      username: existingUser.username,
      email: existingUser.email,
      id: existingUser.id,
    });

    await AsyncStorage.setItem(
      'user',
      JSON.stringify({
        username: existingUser.username,
        email: existingUser.email,
        id: existingUser.id,
      }),
    );
  };

  const logOut = () => {
    setUser(null);
    AsyncStorage.removeItem('user');
  };

  return {
    isLoginForm,
    setIsLoginForm,
    submitLogin,
    submitRegistration,
    user,
    logOut,
  };
}
