import {
    ACTIVATE_ALL_DISHES_LOADING,
    ACTIVATE_ARCHIVE_LOADING,
    ACTIVATE_LOADING,
    ACTIVATE_SMETA_LOADING,
    ACTIVATE_TYPE_OF_DISH_LOADING,
    ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING,
    ERROR,
    SET_ALL_DISHES,
    SET_ARCHIVE_DATA,
    SET_AUTH,
    SET_DICT_TYPE_OF_DISH,
    SET_DICT_TYPE_OF_FOOD_INTAKE,
    SET_SELECTED_GLOBAL_MENU,
    SET_SMETA,
    SET_USER_DATA,
} from '../../actionTypes/dish/actionTypes';
import SimpleRequest from '../../../common/generateRequest';
import { notification } from 'antd';

export const GetAllDishes = () => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_ALL_DISHES_LOADING });
                },
                url: '/dish/all',
                req_cfg: { method: 'GET' },
                postCallBack: (data) => {
                    dispatch({
                        type: SET_ALL_DISHES,
                        payload: data.data.map((x, i) => ({ ...x, key: i })),
                    });
                },
            });
        } catch (e) {
            console.error(e);
        }
    };
};

export const LoginAction = (params, navigate) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ACTIVATE_LOADING });
            const data = await SimpleRequest({
                url: '/admin/login',
                req_cfg: { method: 'POST', data: params },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Авторизация прошла успешно. Добро пожаловать!',
                        });
                        sessionStorage.setItem('isAuth', 'true');
                        dispatch({ type: SET_AUTH });
                        navigate('/main');
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка авторизации! ${data.response.data.errorText}`,
                        });
                    }
                },
            });
            if (data.status < 400) {
                dispatch({ type: SET_USER_DATA, payload: data });
            } else {
                dispatch({ type: ERROR });
            }
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };
};

export const CreateGlobalManu = (params) => {
    return async (dispatch) => {
        try {
            const data = await SimpleRequest({
                url: '/menu/createGlobalMenu',
                req_cfg: { method: 'POST', data: params },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Меню успешно добавлено!',
                        });
                        sessionStorage.setItem('isAuth', 'true');
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка! ${data.response.data.errorText}`,
                        });
                    }
                },
            });
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };
};

export const GetAllDicts = () => {
    return async (dispatch) => {
        try {
            await Promise.all([
                SimpleRequest({
                    preCallBack: () => {
                        dispatch({ type: ACTIVATE_TYPE_OF_DISH_LOADING });
                        dispatch({ type: ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING });
                    },
                    url: '/dish/all/typeOfFoodIntake',
                    req_cfg: { method: 'GET' },
                    postCallBack: (data) => {
                        dispatch({
                            type: SET_DICT_TYPE_OF_FOOD_INTAKE,
                            payload: data.data.map((x, i) => ({ ...x, key: i })),
                        });
                    },
                }).then((data) => ({ ...data.data, type: 'typeOfFoodIntake' })),
                SimpleRequest({
                    url: '/dish/all/typeOfDish',
                    req_cfg: { method: 'GET' },
                    postCallBack: (data) => {
                        dispatch({
                            type: SET_DICT_TYPE_OF_DISH,
                            payload: data.data.map((x, i) => ({ ...x, key: i })),
                        });
                    },
                }).then((data) => ({ ...data.data, type: 'typeOfDish' })),
            ]);
        } catch (e) {
            console.error(e);
        }
    };
};

export const AddTypeOfDish = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/dish/add/x-typeOfDish',
                preCallBack: () => dispatch({ type: ACTIVATE_TYPE_OF_DISH_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись добавлена!',
                        });
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'POST', data: params },
            });
            dispatch(GetAllDicts());
        } catch (e) {
            console.error(e);
        }
    };
};

export const GetAllGlobalMenus = () => {
    return async (dispatch) => {
        try {
            await Promise.all([
                SimpleRequest({
                    preCallBack: () => {
                        dispatch({ type: ACTIVATE_ARCHIVE_LOADING });
                    },
                    url: '/menu/getAllGlobalMenus',
                    req_cfg: { method: 'GET' },
                    postCallBack: (data) => {
                        dispatch({
                            type: SET_ARCHIVE_DATA,
                            payload: data.data.map((x, i) => ({ ...x, key: i })),
                        });
                    },
                }),
            ]);
        } catch (e) {
            console.error(e);
        }
    };
};

export const GetGlobalMenuById = (id) => {
    return async (dispatch) => {
        try {
            await Promise.all([
                SimpleRequest({
                    preCallBack: () => {
                        dispatch({ type: ACTIVATE_ARCHIVE_LOADING });
                    },
                    url: `/menu/getGlobalMenuById?globalMenuId=${id}`,
                    req_cfg: { method: 'GET' },
                    postCallBack: (data) => {
                        dispatch({
                            type: SET_SELECTED_GLOBAL_MENU,
                            payload: data.data,
                        });
                    },
                }),
            ]);
        } catch (e) {
            console.error(e);
        }
    };
};

export const GetSmetaByGlobalMenuID = (id) => {
    return async (dispatch) => {
        try {
            await Promise.all([
                SimpleRequest({
                    preCallBack: () => {
                        dispatch({ type: ACTIVATE_SMETA_LOADING });
                    },
                    url: `/menu/getSmetaByGlobalMenuId?globalMenuId=${id}`,
                    req_cfg: { method: 'GET' },
                    postCallBack: (data) => {
                        dispatch({
                            type: SET_SMETA,
                            payload: data.data,
                        });
                        if (data.status > 400) {
                            notification.success({
                                placement: 'topRight',
                                message: 'Уведомление',
                                description: 'Запись добавлена!',
                            });
                        }
                    },
                }),
            ]);
        } catch (e) {
            console.error(e);
        }
    };
};

export const AddTypeOfFoodIntake = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/dish/add/x-typeOfFoodIntake',
                preCallBack: () => dispatch({ type: ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись добавлена!',
                        });
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'POST', data: params },
            });
            dispatch(GetAllDicts());
        } catch (e) {
            console.error(e);
        }
    };
};

export const DeleteTypeOfFoodIntake = (id) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/dish/typeOfFoodIntake/delete?id=${id}`,
                preCallBack: () => dispatch({ type: ACTIVATE_TYPE_OF_FOOD_INTAKES_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись удалена!',
                        });
                    } else {
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'DELETE' },
            });
            dispatch(GetAllDicts());
        } catch (e) {
            dispatch(GetAllDicts());
            console.error(e);
        }
    };
};

export const DeleteTypeOfDish = (id) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/dish/typeOfDish/delete?id=${id}`,
                preCallBack: () => dispatch({ type: ACTIVATE_TYPE_OF_DISH_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись удалена!',
                        });
                    } else {
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'DELETE' },
            });
            dispatch(GetAllDicts());
        } catch (e) {
            dispatch(GetAllDicts());
            console.error(e);
        }
    };
};

export const CreateDish = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/dish/add',
                preCallBack: () => dispatch({ type: ACTIVATE_ALL_DISHES_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись добавлена!',
                        });
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'POST', data: params },
            });
            dispatch(GetAllDishes());
        } catch (e) {
            console.error(e);
        }
    };
};

export const DeleteDish = (id) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/dish/delete?id=${id}`,
                preCallBack: () => dispatch({ type: ACTIVATE_ALL_DISHES_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись удалена!',
                        });
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'DELETE' },
            });
            dispatch(GetAllDishes());
        } catch (e) {
            console.error(e);
        }
    };
};

export const UpdateDish = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/dish/update?id=${params.id}`,
                preCallBack: () => dispatch({ type: ACTIVATE_ALL_DISHES_LOADING }),
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Запись обновлена!',
                        });
                    } else {
                        console.log(data);
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка: ${data.response.data.errorText}`,
                        });
                    }
                },
                req_cfg: { method: 'PUT', data: params },
            });
            dispatch(GetAllDishes());
        } catch (e) {}
    };
};
