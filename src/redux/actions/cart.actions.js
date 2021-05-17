import api from "../../apiService";
import * as types from "../constants/cart.constants";

const createCart = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_CART_REQUEST, payload: null });
    const res = await api.post(`/cart`, data);
    dispatch({ type: types.CREATE_CART_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: types.CREATE_CART_FAILURE, payload: error.message });
  }
};

const getUserCart = (pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USER_CART_REQUEST });
    const res = await api.get(`/cart?page=${pageNumber}`);
    dispatch({
      type: types.GET_USER_CART_SUCCESS,
      payload: {
        data: res,
        totalPages: res.data.data.totalPages,
      },
    });
  } catch (error) {
    dispatch({ type: types.GET_USER_CART_FAILURE, payload: error.message });
  }
};

const deleteCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_CART_REQUEST, payload: null });
    const res = await api.delete(`/cart/${id}`);
    dispatch({ type: types.DELETE_CART_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: types.DELETE_CART_FAILURE, payload: error.message });
  }
};

export const cartActions = {
  createCart,
  getUserCart,
  deleteCart,
};
