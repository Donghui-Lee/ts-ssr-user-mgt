import { combineReducers } from "redux";
import userForm from "./userform";
import { githubUser } from "./userform";
import { all } from "redux-saga/effects";
import authLogin from './authLogin';
import authRegister from './authRegister';

const rootReducer = combineReducers({
  authLogin,
  authRegister,
  userForm
});

export default rootReducer;

// 리덕스에서 관리하는 상태에 대한 Type(리덕스 스토어에서 관리하고 있는 상태에 대한 Type)
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubUser()]);
}
