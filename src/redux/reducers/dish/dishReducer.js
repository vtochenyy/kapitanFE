import {ACTIVATE_LOADING, SET_USER_DATA} from "../../actionTypes/dish/actionTypes";

let initialState = {
    loading: false,
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
            return newState;
        default:
            return newState;
    }
}

export default dishReducer;