import { combineReducers, createStore } from "redux";
import profileReducer from "./reducer/profile";

const reducer = combineReducers({
  profile: profileReducer
});

const store = createStore(reducer);

export default store;
