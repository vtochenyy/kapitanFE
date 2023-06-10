import { ACTIVATE_ABOUT_LOADING, ERROR, SET_ABOUT_DATA } from '../actionTypes/actionTypes';
import SimpleRequest from '../../common/generateRequest';

export const GetSettingByTitleAction = (title) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/settings/getByTitle?title=${title}`,
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_ABOUT_LOADING });
                },
                redux_cfg: { action: [SET_ABOUT_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
