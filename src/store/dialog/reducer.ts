import { SET_CREATE_TASK_DIALOG, SET_LOGIN_DIALOG, SET_UPDATE_TASK_DIALOG } from "./action";
import { FieldActionDialog, FieldStateDialog } from "./types";

const initialState: FieldStateDialog = {
  loginDialog: false,
  createTask: false,
  updateTask: false,
};

const DialogReducer = (state = initialState, action: FieldActionDialog) => {
  switch (action.type) {
    case SET_LOGIN_DIALOG:
      return {...state, loginDialog: action.payload}
    case SET_CREATE_TASK_DIALOG:
      return {...state, createTask: action.payload}
    case SET_UPDATE_TASK_DIALOG:
      return {...state, updateTask: action.payload}
    default:
      return { ...state };
  }
};

export { DialogReducer }