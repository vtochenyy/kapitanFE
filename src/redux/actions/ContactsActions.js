import { ACTIVATE_CONTACTS_LOADING, ERROR, SET_CONTACTS_DATA } from '../actionTypes/actionTypes';
import SimpleRequest from '../../common/generateRequest';

export const GetContactsAction = () => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/contacts/all',
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_CONTACTS_LOADING });
                },
                redux_cfg: { action: [SET_CONTACTS_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
