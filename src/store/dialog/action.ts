export const SET_LOGIN_DIALOG = "SET_LOGIN_DIALOG";
export const SET_CREATE_TASK_DIALOG = "SET_CREATE_TASK_DIALOG";
export const SET_UPDATE_TASK_DIALOG = "SET_UPDATE_TASK_DIALOG";

export const setCreateTaskDialog = (payload: boolean) => ({
  type: SET_CREATE_TASK_DIALOG,
  payload: payload
});

export const setUpdateTaskDialog = (payload: boolean) => ({
  type: SET_UPDATE_TASK_DIALOG,
  payload: payload
});

export const setLoginDialog = (payload: boolean) => ({
  type: SET_LOGIN_DIALOG,
  payload: payload
});

