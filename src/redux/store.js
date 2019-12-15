import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import cityReducer from "../redux/reducers/cityReducer";
import apiReducer from "../redux/reducers/apiReducer";
import favoritesReducer from "../redux/reducers/favoritesReducer";

const reducers = combineReducers({
  cityReducer,
  apiReducer,
  favoritesReducer
});

export default createStore(reducers, applyMiddleware(thunk, logger));
