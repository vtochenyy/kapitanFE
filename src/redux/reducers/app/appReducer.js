import {
    SET_USER_DATA,
    ERROR,
    SET_AUTH,
    ACTIVATE_USER_LOADING,
} from '../../actionTypes/actionTypes';

let initialState = {
    isAuth: false,
    error: false,
    user: {
        loading: false,
        data: {},
    },
    news: {
        loading: false,
        data: {},
    },
    contacts: {
        loading: false,
        data: {},
    },
    about: {
        loading: false,
        data: {},
    },
    mentions: {
        loading: false,
        data: {},
    },
    photoalbum: {
        loading: false,
        data: {},
    },
    teachers: {
        loading: false,
        data: {},
    },
    conditions: {
        loading: false,
        data: {},
    },
};

const appReducer = (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case ACTIVATE_USER_LOADING:
            newState.user.loading = true;
            return newState;
        case SET_USER_DATA:
            newState.user.data = payload;
            newState.loading = false;
            newState.error = false;
            return newState;
        case SET_AUTH:
            newState.isAuth = true;
            newState.error = false;
            return newState;
        case ERROR:
            newState.error = true;
            newState.user.loading = false;
            return newState;
        default:
            return newState;
    }
};

export default appReducer;
