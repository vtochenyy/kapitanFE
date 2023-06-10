import SimpleRequest from '../../common/generateRequest';
import { ACTIVATE_NEWS_LOADING, ERROR } from '../actionTypes/actionTypes';
import { notification } from 'antd';

export const CreateNewAction = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/news/createNew',
                req_cfg: {
                    method: 'POST',
                    data: params,
                    headers: { UserId: localStorage.getItem('userId') },
                },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_NEWS_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Новость успешно создана!',
                        });
                    }
                },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const CreateContactAction = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/contacts/createContact',
                req_cfg: {
                    method: 'POST',
                    data: params,
                    headers: { UserId: localStorage.getItem('userId') },
                },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_NEWS_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Контакт успешно создан!',
                        });
                    }
                },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const CreateTeacherAction = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/teachers/create',
                req_cfg: {
                    method: 'POST',
                    data: params,
                    headers: { UserId: localStorage.getItem('userId') },
                },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_NEWS_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Преподаватель успешно создан!',
                        });
                    }
                },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
