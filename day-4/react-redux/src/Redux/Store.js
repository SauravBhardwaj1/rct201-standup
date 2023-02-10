import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as authReducer } from "./Auth/auth.reducer";
import { reducer as mensReducer } from "./Mens/mens.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  mens: mensReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
