import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { GithubProfileList } from "../../lib/github";
import { UserForm } from "./types";

// Action Type
export const GET_USER_LIST = "userform/GET_USER_LIST" as const;
export const GET_USER_LIST_SUCCESS = "userform/GET_USER_LIST_SUCCESS" as const;
export const GET_USER_LIST_FAILURE = "userform/GET_USER_LIST_FAILURE" as const;

// Action 생성 함수
export const getUserListAsync = createAsyncAction(
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE
)<UserForm, GithubProfileList, AxiosError>();
