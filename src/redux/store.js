import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import todoReducer from "./reducers/todoReducers";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducers";

const root = combineReducers({
  app: todoReducer,
  auth: authReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(root, enhancer);