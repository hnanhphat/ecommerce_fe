import api from "../../apiService";
import * as types from "../constants/user.constants";
import { toast } from "react-toastify";

const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USER_REQUEST, payload: null });
    const data = await api.get("/users/me");
    dispatch({ type: types.GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_USER_FAILURE, payload: error.message });
  }
};

const updateCurrentUser =
  ({ username, avatar }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.UPDATE_USER_REQUEST, payload: null });
      const data = await api.put("/users", { username, avatar });
      dispatch({ type: types.UPDATE_USER_SUCCESS, payload: data });
      toast.success(data.data.message);
    } catch (error) {
      dispatch({ type: types.UPDATE_USER_FAILURE, payload: error.message });
    }
  };

export const userActions = {
  getCurrentUser,
  updateCurrentUser,
};
