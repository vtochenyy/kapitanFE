import {ACTIVATE_LOADING, SET_USER_DATA, ERROR} from "../../actionTypes/dish/actionTypes";

let initialState = {
    loading: false,
    error: false,
    user: {}
}

const dishReducer = (state = initialState, {type, payload}) => {
    let newState = {...state};
    switch (type) {
        case ACTIVATE_LOADING:
            newState.loading = true;
            return newState;
        case SET_USER_DATA:
            newState.user = payload;
            newState.loading = false;
            newState.error = false;
            return newState;
        case ERROR:
            newState.error = true;
            newState.loading = false;
            return newState;
        default:
            return newState;
    }
}

export default dishReducer;