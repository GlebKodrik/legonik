import { authAPI } from "../api/api";

const SET_AUTH = "auth/SET_AUTH";
const SET_USER = "auth/SET_USER";
let initialState = {
  isAuth: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, isAuth: action.isAuth };
    }
    case SET_USER: {
      return { user: action.user };
    }
    default:
      return state;
  }
};

export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  isAuth,
});
const setUser = (user) => ({ type: SET_USER, user });
export const meThunk = () => async (dispatch) => {
  try {
    const response = await authAPI.me();
    dispatch(setUser(response.data.data));
    dispatch(setAuth(!response.data.errors));
  } catch (e) {
    dispatch(setUser(null));
    dispatch(setAuth(false));
  }
};

export const authThunk = (user) => (dispatch) => {
  dispatch(setAuth(!!user));
  dispatch(setUser(user));
};

export const logOut = () => async (dispatch) => {
  let response = await authAPI.logOut();
  if (!!response.data.errors) {
    return;
  }
  dispatch(setAuth(false));
};

export default userReducer;
