import { RegisterFormType } from './types';

export const CHANGE_REGISTER_FIELD = 'auth/CHANGE_REGISTER_FIELD' as const;
export const INITIALIZE_REGISTER_FORM = 'auth/INITIALIZE_REGISTER_FORM' as const;

export const changeRegisterField = ({ key, value }: RegisterFormType) => ({
  type: CHANGE_REGISTER_FIELD,
  payload: {
    key,
    value,
  },
});

export const initializeRegisterForm = () => ({
  type: INITIALIZE_REGISTER_FORM,
});