import { fetchCategories, fetchProducts } from "../api/products";

const SET_CATEGORIES = "product/SET_CATEGORIES";
const SET_PRODUCT = "product/SET_PRODUCT";
const GET_BASKET = "product/GET_BASKET";
const ADD_BASKET = "product/ADD_BASKET";
const ADD_COUNT = "product/ADD_COUNT";
const REMOVE_BASKET = "product/REMOVE_BASKET";
const GET_PRODUCTS_ALL = "product/GET_PRODUCTS_ALL";
const SET_PRICE = "product/SET_PRICE";
const CLEAR_PRICE = "product/CLEAR_PRICE";

const initialState = {
  categories: null,
  products: null,
  basket: null,
  productsAll: null,
  price: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    case GET_BASKET: {
      return {
        ...state,
        basket: JSON.parse(localStorage.getItem("buy")) || [],
      };
    }
    case SET_PRODUCT: {
      return { ...state, products: action.product };
    }
    case ADD_BASKET: {
      return {
        ...state,
        basket: [...state.basket, { id: action.id, count: 1 }],
      };
    }
    case ADD_COUNT: {
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (action.id === item.id) {
            return { ...item, id: action.id, count: action.count };
          } else return { ...item };
        }),
      };
    }
    case REMOVE_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.id),
      };
    }
    case GET_PRODUCTS_ALL: {
      return {
        ...state,
        productsAll: action.product,
      };
    }
    case CLEAR_PRICE: {
      return {
        ...state,
        price: 0,
      };
    }

    case SET_PRICE: {
      if (action.mark === "-") {
        return {
          ...state,
          price: state.price - action.price,
        };
      }
      return {
        ...state,
        price: state.price + action.price,
      };
    }
    default:
      return state;
  }
};

export const removeBasket = (id) => ({ type: REMOVE_BASKET, id });
export const getProductsAll = (product) => ({
  type: GET_PRODUCTS_ALL,
  product,
});
export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });
export const setPrice = (price, mark) => ({ type: SET_PRICE, price, mark });
export const clearPrice = () => ({ type: CLEAR_PRICE });
export const setProducts = (product) => ({ type: SET_PRODUCT, product });
export const addCount = (id, count) => ({ type: ADD_COUNT, id, count });
export const getBasket = () => ({ type: GET_BASKET });
export const addBasket = (id) => ({ type: ADD_BASKET, id });

export const getCategories = () => async (dispatch) => {
  const response = await fetchCategories();
  dispatch(setCategories(response.data));
};

export const getProducts = (id) => async (dispatch) => {
  const response = await fetchProducts(id);
  dispatch(setProducts(response.data));
};
export const getProducstALL = () => async (dispatch) => {
  const response = await fetchProducts();
  dispatch(getProductsAll(response.data));
};
