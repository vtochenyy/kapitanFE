import axios from 'axios';
import { HOST } from './BE_API';

async function SimpleRequest({ url, req_cfg, redux_cfg, preCallBack, postCallBack }) {
    try {
        if (!!url) {
            preCallBack && preCallBack();
            const config = { url: HOST + url, ...req_cfg };
            const data = await sendRequest(config);
            if (data.data.statusCode >= 400) {
                throw new Error(data.data);
            } else {
                redux_cfg && redux_cfg.action.forEach((el) => redux_cfg.dispatch(el(data.data)));
                postCallBack && postCallBack(data.data);
                return data;
            }
        }
    } catch (err) {
        postCallBack && postCallBack(err);
        return err;
    }
}

async function sendRequest(config) {
    return axios(config);
}

export default SimpleRequest;
