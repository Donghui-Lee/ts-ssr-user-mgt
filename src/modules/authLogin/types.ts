import { changeLoginField, initializeLoginForm } from './actions';

// Login / Register Field Type
export type LoginFormType = {
  key: string;
  value: string;
};

export type AuthLoginAction =
  | ReturnType<typeof changeLoginField>
  | ReturnType<typeof initializeLoginForm>;

export type LoginState = {
  username: string;
  password: string;
};
