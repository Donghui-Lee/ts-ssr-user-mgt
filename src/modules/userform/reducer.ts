import { GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from "./actions";
import { createReducer } from "typesafe-actions";
import { UserFormState, UserFormActions } from "./types";


const initialState  = {
    userList : {
        loading: false,
        data: null,
        error: null
    }
};

const userForm = createReducer<UserFormState, UserFormActions>(initialState, {
    [GET_USER_LIST]: (state) => ({
        ...state,
        userList: {
            loading: true,
            data: null,
            error: null
        }
    }),
    [GET_USER_LIST_SUCCESS]: (state, action) => ({
        ...state,
        userList: {
            loading: false,
            data: action.payload,
            error: null
        }
    }),
    [GET_USER_LIST_FAILURE]: (state, action) => ({
        ...state,
        userList: {
            loading: false,
            data: null,
            error: action.payload
        }
    })
});


export default userForm;