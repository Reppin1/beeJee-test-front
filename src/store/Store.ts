import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./Reducers";

export const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
