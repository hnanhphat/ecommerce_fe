import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import decksReducer from "./decks.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  decks: decksReducer,
  route: routeReducer,
  user: userReducer,
});
