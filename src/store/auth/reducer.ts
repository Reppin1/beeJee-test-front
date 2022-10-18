import { SET_ERROR, SET_DEFAULT, SET_USER } from "./action";
import { FieldActionAuth, FieldStateAuth } from "./types";

const initialState: FieldStateAuth = {
  user: {
    login: false
  },
  err: null
};

const AuthReducer = (state = initialState, action: FieldActionAuth) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload}
    case SET_DEFAULT:
      return {...state, user: {}}
    case SET_ERROR:
      return {...state, err: action.payload}
    default:
      return { ...state };
  }
};

export { AuthReducer }