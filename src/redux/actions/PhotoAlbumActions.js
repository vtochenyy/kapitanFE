import {
    ACTIVATE_PHOTOALBUM_LOADING,
    ERROR,
    SET_PHOTOALBUM_DATA,
    SET_TARGET_PHOTOALBUM_DATA,
} from '../actionTypes/actionTypes';
import SimpleRequest from '../../common/generateRequest';

export const GetPhotoAlbumsAction = () => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/photoalbum/all',
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_PHOTOALBUM_LOADING });
                },
                redux_cfg: { action: [SET_PHOTOALBUM_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const GetPhotoAlbumByIdAction = (id) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/photoalbum/findById?id=${id}`,
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_PHOTOALBUM_LOADING });
                },
                redux_cfg: { dispatch: dispatch, action: [SET_TARGET_PHOTOALBUM_DATA] },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
