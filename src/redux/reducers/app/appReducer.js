import {
    SET_USER_DATA,
    ERROR,
    SET_AUTH,
    ACTIVATE_USER_LOADING,
    SET_NEWS_DATA,
    ACTIVATE_CONTACTS_LOADING,
    ACTIVATE_NEWS_LOADING,
    SET_CONTACTS_DATA,
    SET_NEWS_TARGET_DATA,
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
        data: [],
        target: {},
    },
    contacts: {
        loading: false,
        data: [],
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
        case ACTIVATE_NEWS_LOADING:
            newState.news.loading = true;
            return newState;
        case ACTIVATE_CONTACTS_LOADING:
            newState.contacts.loading = true;
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
        case SET_NEWS_DATA:
            newState.news.data = payload;
            newState.news.loading = false;
            newState.error = false;
            return newState;
        case SET_NEWS_TARGET_DATA:
            newState.news.target = payload;
            newState.news.loading = false;
            newState.error = false;
            return newState;
        case SET_CONTACTS_DATA:
            newState.contacts.data = payload;
            newState.contacts.loading = false;
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
