import {ACTIVATE_LOADING, ERROR, SET_USER_DATA} from "../../actionTypes/dish/actionTypes";
import SimpleRequest from "../../../common/generateRequest";

export const LoginAction = (params) => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTIVATE_LOADING});
            const data = await SimpleRequest(
                {
                    url: 'http://localhost:8111/admin/login',
                    req_cfg: {method: 'POST', data: params}
                }
            )
            if (data.status < 400) {
                dispatch({type: SET_USER_DATA, payload: data});
            } else {
                dispatch({type: ERROR});
            }
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
}