import { SET_LOGIN_DIALOG, SET_CREATE_TASK_DIALOG, SET_UPDATE_TASK_DIALOG } from "./action";

type SET_LOGIN_DIALOG = typeof SET_LOGIN_DIALOG;
type SET_CREATE_TASK_DIALOG = typeof SET_CREATE_TASK_DIALOG;
type SET_UPDATE_TASK_DIALOG = typeof SET_UPDATE_TASK_DIALOG;

export interface FieldStateDialog {
  loginDialog: boolean;
  createTask: boolean;
  updateTask: boolean;
}

export interface ISetLoginDialog {
  type: SET_LOGIN_DIALOG;
  payload: boolean;
}

export interface ISetUpdateTaskDialog {
  type: SET_UPDATE_TASK_DIALOG;
  payload: boolean;
}

export interface ISetCreateTaskDialog {
  type: SET_CREATE_TASK_DIALOG;
  payload: boolean;
}


export type FieldActionDialog = ISetLoginDialog | ISetCreateTaskDialog | ISetUpdateTaskDialog;