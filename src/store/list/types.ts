import {
  SET_LOADING,
  SET_CREATED_TASK,
  SET_TASKS,
  SET_ERROR,
  SET_SORT_BY,
  SET_SORT,
  SET_SELECT_CURRENT_TASK,
  SET_UPDATED_STATUS_TASK,
  SET_UPDATE_TEXT_TASK_SUCCESS
} from "./action";
import { IUpdateTaskText } from "../../types/task";
import { SortField } from "../../hooks/useSort/types";

type SET_TASKS = typeof SET_TASKS;
type SET_LOADING = typeof SET_LOADING;
type SET_ERROR = typeof SET_ERROR;
type SET_SORT_BY = typeof SET_SORT_BY;
type SET_SORT = typeof SET_SORT;
type SET_SELECT_CURRENT_TASK = typeof SET_SELECT_CURRENT_TASK;
type SET_CREATED_TASK = typeof SET_CREATED_TASK;
type SET_UPDATED_STATUS_TASK = typeof SET_UPDATED_STATUS_TASK;
type SET_UPDATE_TEXT_TASK_SUCCESS = typeof SET_UPDATE_TEXT_TASK_SUCCESS;

export interface ITaskFields {
  id: number;
  email?: string;
  status?: boolean;
  task?: string;
  changed?: boolean;
  name?: string;
}

interface ISortParams {
  DESC: boolean;
}

export interface IPropsSortBy {
  DESC: boolean
}

export interface FieldStateList {
  items: ITaskFields[],
  selectedItem: ITaskFields,
  isLoading?: boolean,
  sort?: SortField | string;
  sortBy: ISortParams;
  err?: null | string;
  createdAt?: Date;
}

export interface ISetTasks{
  type: SET_TASKS;
  payload: string;
}

export interface ISetSort {
  type: SET_SORT;
  payload: string | boolean;
}

export interface ISetSortBy {
  type: SET_SORT_BY;
  payload: {
    DESC: boolean
  }
}

export interface ISetCreatedTask {
  type: SET_CREATED_TASK;
  payload: ITaskFields
}

export interface IUpdateTask {
  type: SET_SELECT_CURRENT_TASK;
  payload: ITaskFields;
}

interface ISetUpdatedStatusTask {
  type: SET_UPDATED_STATUS_TASK,
  payload: ITaskFields
}

export interface ISetLoading {
  type: SET_LOADING;
  payload: boolean;
}

export interface ISetError {
  type: SET_ERROR;
  payload: string;
}

export interface IPatchUpdateStatusTask {
  id: number;
  status: boolean;
}

interface IUpdateTextStatus {
  type: SET_UPDATE_TEXT_TASK_SUCCESS,
  payload: IUpdateTaskText,
}


export type FieldActionList = ISetTasks
  | ISetError | ISetLoading | ISetSort
  | ISetSortBy | IUpdateTask | ISetCreatedTask
  | ISetUpdatedStatusTask | IUpdateTextStatus;