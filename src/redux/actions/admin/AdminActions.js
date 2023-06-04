import {
    ACTIVATE_USER_LOADING,
    ERROR,
    SET_AUTH,
    SET_USER_DATA,
} from '../../actionTypes/actionTypes';
import SimpleRequest from '../../../common/generateRequest';
import { notification } from 'antd';

export const LoginAction = (params, navigate) => {
    return async (dispatch) => {
        try {
            const data = await SimpleRequest({
                url: '/user/login',
                req_cfg: { method: 'POST', data: params },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_USER_LOADING });
                },
                postCallBack: (data) => {
                    if (data.status < 400) {
                        notification.success({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: 'Авторизация прошла успешно. Добро пожаловать!',
                        });
                        sessionStorage.setItem('isAuth', 'true');
                        dispatch({ type: SET_AUTH });
                        navigate('/about');
                    } else {
                        notification.error({
                            placement: 'topRight',
                            message: 'Уведомление',
                            description: `Ошибка авторизации! ${data.response.data.errorText}`,
                        });
                    }
                },
            });
            if (data.status < 400) {
                dispatch({ type: SET_USER_DATA, payload: data.data.data });
            } else {
                dispatch({ type: ERROR });
            }
            console.log(data);
        } catch (e) {
            dispatch({ type: ERROR });
            console.error(e);
        }
    };
};
