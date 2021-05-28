import {
  getBasket,
  getCategories,
  getProducstALL,
  getProducts,
} from "./product-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async (dispatch) => {
  await dispatch(getCategories());
  await dispatch(getBasket());
  await dispatch(getProducts());
  await dispatch(getProducstALL());
  setTimeout(() => {
    dispatch(initializedSuccess());
  }, 1000);
};
