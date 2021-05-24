import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import decksReducer from "./decks.reducer";
import newsReducer from "./news.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  decks: decksReducer,
  news: newsReducer,
  route: routeReducer,
  user: userReducer,
});
