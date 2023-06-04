import {
    ACTIVATE_NEWS_LOADING,
    ERROR,
    SET_NEWS_DATA,
    SET_NEWS_TARGET_DATA,
} from '../../actionTypes/actionTypes';
import SimpleRequest from '../../../common/generateRequest';

export const GetNewsAction = () => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/news/all',
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_NEWS_LOADING });
                },
                redux_cfg: { action: [SET_NEWS_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const GetNewByIdAction = (id) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/news/findById?id=${id}`,
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_NEWS_LOADING });
                },
                postCallBack: async (response) => {
                    await SimpleRequest({
                        url: `/user/findById?id=${response.data.createdBy}`,
                        req_cfg: { method: 'GET' },
                        preCallBack: () => {
                            dispatch({ type: ACTIVATE_NEWS_LOADING });
                        },
                        postCallBack: ({ data }) => {
                            dispatch({
                                type: SET_NEWS_TARGET_DATA,
                                payload: {
                                    ...response.data,
                                    createdBy: data.name + ' ' + data.lastname,
                                },
                            });
                        },
                    });
                },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
