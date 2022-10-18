import { get, patch, post } from '../../api';
import { IPatchUpdateStatusTask, IPropsSortBy, ITaskFields } from "./types";
import { ITaskCreateFields, IUpdateTaskText } from "../../types/task";
import { toast } from "react-toastify";

export const SET_TASKS = "SET_TASKS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_SORT = "SET_SORT";
export const SET_SORT_BY = "SET_SORT_BY";
export const SET_CREATED_TASK = "SET_CREATED_TASK";
export const SET_SELECT_CURRENT_TASK = "SET_SELECT_CURRENT_TASK";
export const SET_UPDATED_STATUS_TASK = "SET_UPDATED_STATUS_TASK";
export const SET_UPDATE_TEXT_TASK_SUCCESS = "SET_UPDATE_TEXT_TASK_SUCCESS";

const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload: payload
});

const setError = (payload: any) => ({
  type: SET_ERROR,
  payload: payload
});

const setTasks = (payload: any) => ({
  type: SET_TASKS,
  payload: payload
});

const setCurrentTask = (payload: ITaskFields) => ({
  type: SET_SELECT_CURRENT_TASK,
  payload: payload
});

export const setSort = (payload: string) => ({
  type: SET_SORT,
  payload: payload
});

export const setUpdateTextTaskSuccess = (payload: IUpdateTaskText) => ({
  type: SET_UPDATE_TEXT_TASK_SUCCESS,
  payload: payload
})

const setCreatedTask = (payload: ITaskFields) => ({
  type: SET_CREATED_TASK,
  payload: payload
});

const setUpdatedStatusTask = (payload: IPatchUpdateStatusTask) => ({
  type: SET_UPDATED_STATUS_TASK,
  payload: payload
})

export const setSortBy = (payload: IPropsSortBy) => ({
  type: SET_SORT_BY,
  payload: payload
});

export const setSelectedTask = (payload: number) => (dispatch: any, getState: any) => {
  const findTask = getState().ListReducer.items.find((el: ITaskFields) => el.id === payload);
  if (findTask) {
    dispatch(setCurrentTask(findTask))
  }
};

export const getTasks = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const resp = await get('/tasks')
    dispatch(setTasks(resp.data));
  } catch (e) {
    dispatch(setError(e));
  }
}

export const createTask = (data: ITaskCreateFields) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const resp = await post('/createTask', data);
    dispatch(setCreatedTask(resp.data));
    toast.success('Успешно', {
      autoClose: 3000,
      draggable: true,
    });
  } catch (e) {
    dispatch(setError(e));
  }
}

export const updateStatusTask = (data: IPatchUpdateStatusTask) => async (dispatch: any) => {
  try {
    const resp = await patch('/updateStatusTask', data);
    dispatch(setUpdatedStatusTask(resp.data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const updateTextTask = (data: IUpdateTaskText) => async (dispatch: any) => {
  try {
    const resp = await patch('/updateTaskChanged', data);
    dispatch(setUpdateTextTaskSuccess(resp.data));
  } catch (e) {
    dispatch(setError(e));
  }
}