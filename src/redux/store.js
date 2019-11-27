import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import cityReducer from "../redux/reducers/cityReducer";

const reducers = combineReducers({
  cityReducer
});

export default createStore(
  reducers,
  applyMiddleware(
    thunk,
    logger
  )
);
