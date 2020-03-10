import { createStore } from "redux";
import countReducer from "./reducer";

const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
