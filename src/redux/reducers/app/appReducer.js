import {
    ACTIVATE_LOADING,
    SET_USER_DATA,
    ERROR,
    SET_DICT_TYPE_OF_FOOD_INTAKE,
    SET_DICT_TYPE_OF_DISH,
    ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING,
    ACTIVATE_TYPE_OF_DISH_LOADING
} from "../../actionTypes/dish/actionTypes";

let initialState = {
    loading: false,
    error: false,
    dicts: {
        typesOfDish: {
            loading: false,
            data: []
        },
        typesOfFoodIntake: {
            loading: false,
            data: []
        }
    },
    user: {}
}

const appReducer = (state = initialState, {type, payload}) => {
    let newState = {...state};
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
        case ERROR:
            newState.error = true;
            newState.loading = false;
            return newState;
        default:
            return newState;
    }
}

export default appReducer;