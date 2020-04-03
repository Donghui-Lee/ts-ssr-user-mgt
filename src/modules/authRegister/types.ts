import { changeRegisterField, initializeRegisterForm } from './actions';

// Login / Register Field Type
export type RegisterFormType = {
  key: string;
  value: string;
};

export type AuthAction =
  | ReturnType<typeof changeRegisterField>
  | ReturnType<typeof initializeRegisterForm>;

export type RegisterState = {
  username: string;
  password: string;
  passwordConfirm: string;
};