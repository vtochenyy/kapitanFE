import {
    ACTIVATE_MENTIONS_LOADING,
    ACTIVATE_NEWS_LOADING,
    ERROR,
    SET_MENTIONS_DATA,
    SET_MENTIONS_TARGET_DATA,
    SET_NEWS_TARGET_DATA,
} from '../actionTypes/actionTypes';
import SimpleRequest from '../../common/generateRequest';

export const GetMentionsAction = () => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/mentions/all',
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_MENTIONS_LOADING });
                },
                redux_cfg: { action: [SET_MENTIONS_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const GetMentionByIdAction = (id) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/mentions/findById?id=${id}`,
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_MENTIONS_LOADING });
                },
                redux_cfg: { dispatch: dispatch, action: [SET_MENTIONS_TARGET_DATA] },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
