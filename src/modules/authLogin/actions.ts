import { LoginFormType } from './types';

export const CHANGE_LOGIN_FIELD = 'auth/CHANGE_LOGIN_FIELD' as const;
export const INITIALIZE_LOGIN_FORM = 'auth/INITIALIZE_LOGIN_FORM' as const

export const changeLoginField = ({key, value} : LoginFormType) => ({
    type: CHANGE_LOGIN_FIELD,
    payload: {
        key,
        value
    }
});

export const initializeLoginForm = () => ({
    type: INITIALIZE_LOGIN_FORM, 
});
