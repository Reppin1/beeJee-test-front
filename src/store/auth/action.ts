import { get, post } from '../../api';
import { IUser } from "../../types/user";
export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const SET_DEFAULT = "SET_DEFAULT";

const setError = (payload: any) => ({
  type: SET_ERROR,
  payload: payload
})

const setUser = (payload: any) => ({
  type: SET_USER,
  payload: payload
});

export const loginUser = (payload: IUser) => async (dispatch: any) => {
  try {
    const resp = await post('/login', payload)
    dispatch(setUser(resp.data));
    return resp.data;
  } catch (e) {
    dispatch(setError(e));
    return e
  }
};

export const logoutUser = () => async (dispatch: any) => {
  try {
    const resp = await get('/logout');
    dispatch(setUser(resp.data));
  } catch (e) {
    dispatch(setError(e));
  }
}

export const authUser = () => async (dispatch: any) => {
  const resp = await get('/auth')
  if (resp.data) {
    dispatch(setUser(resp.data));
  }
}