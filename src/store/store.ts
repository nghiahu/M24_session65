import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import usersReducer from "./reducers/usersReducer";
import productState from "./reducers/productReducer";
import profileReducer from "./reducers/ProfileReducer";
import RandomNumberReducer from './reducers/randomNumberReducer';
import changeStateReducer from "./reducers/changeStateReducer";
import darkmodeReducer from './reducers/darkmodeReducer'
const rootReducer = combineReducers({countReducer,usersReducer,productState,profileReducer,RandomNumberReducer,changeStateReducer,darkmodeReducer});

const store = createStore(rootReducer);

export default store;