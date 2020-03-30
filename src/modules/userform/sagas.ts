import { getUserListAsync, GET_USER_LIST } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { GithubProfileList, getUserProfileList } from "../../lib/github";

function* getUserListSaga(action: ReturnType<typeof getUserListAsync.request>) {
  try {
    //const userList: GithubProfileList = yield call(getUserProfileList, action.payload);
    const userList: GithubProfileList = yield call(getUserProfileList);
    yield put(getUserListAsync.success(userList));
  } catch (e) {
    yield put(getUserListAsync.failure(e));
  }
}

export function* githubUser() {
    yield takeEvery(GET_USER_LIST, getUserListSaga);
}