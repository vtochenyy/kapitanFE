import {ACTIVATE_LOADING} from "../../actionTypes/dish/actionTypes";
import SimpleRequest from "../../../common/generateRequest";

export const Login = async (dispatch, data) => {
    try{
        dispatch({type: ACTIVATE_LOADING});
        const data = await  SimpleRequest({})
    } catch (e) {
        
    }

    
}