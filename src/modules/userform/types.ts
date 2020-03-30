import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { GithubProfileList } from "../../lib/github";

export type UserFormActions = ActionType<typeof actions>;

export type UserFormState = {
  userList: {
    loading: boolean;
    data: GithubProfileList | null;
    error: Error | null;
  };
};

export type UserForm = {
  username: string | null;
  email: string | null;
};
