import { combineReducers } from "redux";
import { ListReducer } from "./list/reducer";
import { AuthReducer } from "./auth/reducer";
import { DialogReducer } from "./dialog/reducer";

const Reducers = combineReducers({
  ListReducer,
  AuthReducer,
  DialogReducer
})

export default Reducers;