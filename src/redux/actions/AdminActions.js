import SimpleRequest from '../../common/generateRequest';
import {
    ACTIVATE_CONTACTS_LOADING,
    ACTIVATE_MENTIONS_LOADING,
    ACTIVATE_NEWS_LOADING,
    ACTIVATE_PHOTOALBUM_LOADING,
    ACTIVATE_TEACHERS_LOADING,
    ERROR,
} from '../actionTypes/actionTypes';
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

export const CreateMentionAction = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/mentions/create',
                req_cfg: {
                    method: 'POST',
                    data: params,
                    headers: { UserId: localStorage.getItem('userId') },
                },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_MENTIONS_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Мероприятие успешно создано!',
                        });
                    }
                },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const UpdateOrCreateSchoolInfoAction = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/settings/create',
                req_cfg: {
                    method: 'POST',
                    data: params,
                    headers: { UserId: localStorage.getItem('userId') },
                },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_MENTIONS_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Информация о школе успешно обновлена!',
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
                    dispatch({ type: ACTIVATE_CONTACTS_LOADING });
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
                    dispatch({ type: ACTIVATE_TEACHERS_LOADING });
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

export const CreatePhotoalbumAction = (params) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/photoalbum/create',
                req_cfg: {
                    method: 'POST',
                    data: params,
                    headers: { UserId: localStorage.getItem('userId') },
                },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_PHOTOALBUM_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Фотоальбом успешно создан!',
                        });
                    }
                },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
