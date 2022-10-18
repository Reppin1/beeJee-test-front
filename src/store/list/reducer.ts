import {
  SET_CREATED_TASK,
  SET_ERROR,
  SET_LOADING,
  SET_SELECT_CURRENT_TASK,
  SET_SORT,
  SET_TASKS,
  SET_UPDATED_STATUS_TASK
} from "./action";
import { FieldActionList, FieldStateList } from "./types";

const initialState: FieldStateList = {
  items: [],
  isLoading: false,
  sort: '',
  sortBy: {
    DESC: true
  },
  selectedItem : {
    id: 0
  },
  err: null
};

const ListReducer = (state = initialState, action: FieldActionList) => {
  switch (action.type) {
    case SET_TASKS:
      return {...state, items: action.payload, isLoading: false}
    case SET_LOADING:
      return {...state, isLoading: true}
    case SET_CREATED_TASK:
      return {...state, items: [action.payload, ...state.items]}
    case SET_SORT:
      return {...state, sort: action.payload, sortBy: {DESC: false}}
    case "SET_SORT_BY":
      return {...state, sortBy: state.sortBy = action.payload}
    case SET_UPDATED_STATUS_TASK:
      return {
        ...state, items: state.items.map((task) => {
          if (task.id === action.payload.id) {
            return {...task, status: action.payload.status}
          }
          return task
        })
      };
    case "SET_UPDATE_TEXT_TASK_SUCCESS":
      return {
        ...state, items: state.items.map((task) => {
          if (task.id === action.payload.id) {
            return {...task, changed: action.payload.changed, task: action.payload.task}
          }
          return task
        })
      };
    case SET_ERROR:
      return {...state, err: action.payload}
    case SET_SELECT_CURRENT_TASK:
      return {...state, selectedItem: action.payload}
    default:
      return { ...state };
  }
};

export { ListReducer }