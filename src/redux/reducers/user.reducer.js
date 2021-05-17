import * as types from "../constants/user.constants";

const initialState = {
  currentUser: [],
  loading: false,
  error: "",
  currentPage: 1,
  allUser: [],
  friendship: [],
  isAdmin: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_REQUEST:
    case types.UPDATE_USER_REQUEST:
      state.loading = true;
      break;
    case types.GET_USER_FAILURE:
    case types.UPDATE_USER_FAILURE:
      state.error = payload;
      state.loading = false;
      break;
    case types.GET_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      state.currentUser = payload.data;
      state.isAdmin = payload.isAdmin;
      state.loading = false;
      break;
    default:
      break;
  }

  return { ...state };
};

export default userReducer;
