import { AuthLoginAction, LoginState } from './types';
import { createReducer } from 'typesafe-actions';
import { CHANGE_LOGIN_FIELD, INITIALIZE_LOGIN_FORM } from './actions';

const initialLoginState: LoginState = {
  username: '',
  password: '',
};

const authLogin = createReducer<LoginState, AuthLoginAction>(
  initialLoginState,
  {
    [CHANGE_LOGIN_FIELD]: (state, {payload: {key, value}}) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_LOGIN_FORM]: state => ({
      ...state,
      state: initialLoginState,
    }),
  },
);

export default authLogin;