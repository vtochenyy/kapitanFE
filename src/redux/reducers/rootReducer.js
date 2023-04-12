import {combineReducers} from "redux";
import appReducer from "./app/appReducer";

const mainReducer = combineReducers({
    app: appReducer,
})

export const rootReducer = (state, action) => {
    return mainReducer(state, action);
};