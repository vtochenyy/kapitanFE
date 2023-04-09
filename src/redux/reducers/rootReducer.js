import {combineReducers} from "redux";
import dishReducer from "./dish/dishReducer";

const appReducer = combineReducers({
    dish: dishReducer,
})

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};