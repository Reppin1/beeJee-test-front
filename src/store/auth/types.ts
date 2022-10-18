import { SET_DEFAULT, SET_USER, SET_ERROR } from "./action";

type SET_USER = typeof SET_USER;
type SET_DEFAULT = typeof SET_DEFAULT;
type SET_ERROR = typeof SET_ERROR;

export interface IUserFields {
  login: boolean;
}

export interface FieldStateAuth {
  user: IUserFields
  err?: null | string;
}

export interface ISetUserDefault {
  type: SET_DEFAULT;
  payload: object;
}

export interface ISetUser {
  type: SET_USER;
  payload: IUserFields;
}

export interface ISetError {
  type: SET_ERROR;
  payload: string;
}


export type FieldActionAuth = ISetUser | ISetError | ISetUserDefault;