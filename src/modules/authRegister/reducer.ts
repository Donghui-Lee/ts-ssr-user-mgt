import { AuthAction, RegisterState } from './types';
import { INITIALIZE_REGISTER_FORM, CHANGE_REGISTER_FIELD, initializeRegisterForm } from './actions';
import { createReducer } from 'typesafe-actions';

const initialRegisterstate: RegisterState = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const authRegister = createReducer<RegisterState, AuthAction>(
  initialRegisterstate,
  {
    [CHANGE_REGISTER_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key] : value
    }),
    [INITIALIZE_REGISTER_FORM]: (state) => ({
      ...state,
      state: initializeRegisterForm,
    }),
  },
);

export default authRegister;