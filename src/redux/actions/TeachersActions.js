import { ACTIVATE_TEACHERS_LOADING, ERROR, SET_TEACHERS_DATA } from '../actionTypes/actionTypes';
import SimpleRequest from '../../common/generateRequest';

export const GetTeachersAction = () => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: '/teachers/all',
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_TEACHERS_LOADING });
                },
                redux_cfg: { action: [SET_TEACHERS_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};

export const GetTeacherByAggregation = (aggregation) => {
    return async (dispatch) => {
        try {
            await SimpleRequest({
                url: `/teachers/findByAggregation?aggregation=${aggregation}`,
                req_cfg: { method: 'GET' },
                preCallBack: () => {
                    dispatch({ type: ACTIVATE_TEACHERS_LOADING });
                },
                redux_cfg: { action: [SET_TEACHERS_DATA], dispatch: dispatch },
            });
        } catch (e) {
            dispatch({ type: ERROR });
        }
    };
};
