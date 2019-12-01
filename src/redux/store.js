import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import cityReducer from "../redux/reducers/cityReducer";
import apiReducer from "../redux/reducers/apiReducer";

const reducers = combineReducers({
  cityReducer,
  apiReducer
});

export default createStore(reducers, applyMiddleware(thunk, logger));
