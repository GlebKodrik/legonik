import { fetchCategories, fetchProducts } from "../api/products";

const SET_CATEGORIES = "product/SET_CATEGORIES";
const SET_PRODUCT = "product/SET_PRODUCT";

const initialState = {
  categories: null,
  products: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    case SET_PRODUCT: {
      return { ...state, products: action.product };
    }
    default:
      return state;
  }
};

export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });
export const setProducts = (product) => ({ type: SET_PRODUCT, product });

export const getCategories = () => async (dispatch) => {
  const response = await fetchCategories();
  dispatch(setCategories(response.data));
};

export const getProducts = (id) => async (dispatch) => {
  const response = await fetchProducts(id);
  dispatch(setProducts(response.data));
};
