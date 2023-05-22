import {
    ACTIVATE_LOADING,
    SET_USER_DATA,
    ERROR,
    SET_DICT_TYPE_OF_FOOD_INTAKE,
    SET_DICT_TYPE_OF_DISH,
    ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING,
    ACTIVATE_TYPE_OF_DISH_LOADING,
    SET_ALL_DISHES,
    ACTIVATE_ALL_DISHES_LOADING,
    SET_AUTH,
    ACTIVATE_ARCHIVE_LOADING,
    SET_ARCHIVE_DATA,
    SET_SELECTED_GLOBAL_MENU,
    ACTIVATE_SMETA_LOADING,
    SET_SMETA,
} from '../../actionTypes/dish/actionTypes';

let initialState = {
    isAuth: false,
    loading: false,
    error: false,
    dicts: {
        typesOfDish: {
            loading: false,
            data: [],
        },
        typesOfFoodIntake: {
            loading: false,
            data: [],
        },
    },
    allDishes: {
        loading: false,
        data: [],
    },
    user: {},
    archive: {
        loading: false,
        data: [],
        selectedGlobalMenu: {},
    },
    smeta: {
        data: {},
        loading: false,
    },
};

const appReducer = (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case ACTIVATE_LOADING:
            newState.loading = true;
            return newState;
        case ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING:
            newState.dicts.typesOfFoodIntake.loading = true;
            return newState;
        case ACTIVATE_TYPE_OF_DISH_LOADING:
            newState.dicts.typesOfDish.loading = true;
            return newState;
        case ACTIVATE_ALL_DISHES_LOADING:
            newState.archive.loading = true;
            return newState;
        case ACTIVATE_ARCHIVE_LOADING:
            newState.archive.loading = true;
            return newState;
        case ACTIVATE_SMETA_LOADING:
            newState.smeta.loading = true;
            return newState;
        case SET_USER_DATA:
            newState.user = payload;
            newState.loading = false;
            newState.error = false;
            return newState;
        case SET_DICT_TYPE_OF_FOOD_INTAKE:
            newState.dicts.typesOfFoodIntake.data = payload;
            newState.error = false;
            newState.dicts.typesOfFoodIntake.loading = false;
            return newState;
        case SET_DICT_TYPE_OF_DISH:
            newState.dicts.typesOfDish.data = payload;
            newState.error = false;
            newState.dicts.typesOfDish.loading = false;
            return newState;
        case SET_ALL_DISHES:
            newState.allDishes.data = payload;
            newState.allDishes.loading = false;
            newState.error = false;
            return newState;
        case SET_ARCHIVE_DATA:
            newState.archive.data = payload;
            newState.archive.loading = false;
            newState.error = false;
            return newState;
        case SET_AUTH:
            newState.isAuth = true;
            newState.error = false;
            return newState;
        case SET_SELECTED_GLOBAL_MENU:
            newState.archive.selectedGlobalMenu = payload;
            newState.error = false;
            return newState;
        case SET_SMETA:
            newState.smeta.data = payload;
            newState.smeta.loading = false;
            newState.error = false;
            return newState;
        case ERROR:
            newState.error = true;
            newState.loading = false;
            return newState;
        default:
            return newState;
    }
};

export default appReducer;
