import * as React from 'react';
import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../Screens/HomeScreen/HomeScreen';
import {AppNavigatorList} from './NavigationTypes';
import {LoginScreen} from '../Screens/LoginScreen/LoginScreen';
import {Colors} from '../utils/Colors';
import {LoginContext} from '../App';

interface AppNavigatorProps {}

const Stack = createNativeStackNavigator<AppNavigatorList>();

export const AppNavigator = ({}: AppNavigatorProps) => {
  const {user} = useContext(LoginContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.background},
        }}>
        {user ? (
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        ) : (
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
