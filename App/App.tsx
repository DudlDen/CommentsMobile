import * as React from 'react';
import {createContext, Dispatch} from 'react';
import {AppNavigator} from './stacks/AppNavigator';
import {useLogin} from './utils/hooks/useLogin';
import {IUser} from './utils/types';

interface ILoginContext {
  isLoginForm: boolean;
  user: IUser | null;
  logOut: () => void;
  setIsLoginForm: Dispatch<boolean>;
  submitLogin: (email: string, password: string) => void;
  submitRegistration: (
    email: string,
    username: string,
    password: string,
  ) => void;
}

export const LoginContext = createContext<ILoginContext>({
  isLoginForm: true,
  user: null,
  setIsLoginForm: () => {},
  submitLogin: () => {},
  submitRegistration: () => {},
  logOut: () => {},
});

function App() {
  const loginState = useLogin();
  return (
    <LoginContext.Provider value={loginState}>
      <AppNavigator />
    </LoginContext.Provider>
  );
}

export default App;
