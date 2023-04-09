import axios from "axios";

async function SimpleRequest({url, req_cfg, redux_cfg, preCallBack, postCallBack}) {
    try {
        if (!!url && !req_cfg) {
            preCallBack && preCallBack();
            const data = await sendRequest({
                url: url, method: "get", ...req_cfg,
            });
            if (data.data.statusCode >= 400) {
                throw new Error(data.data);
            } else {
                redux_cfg && redux_cfg.action.forEach((el) => redux_cfg.dispatch(el(data.data)));
                postCallBack && postCallBack(data.data);
                return data;
            }
        } else if (!!url && !!req_cfg) {
            preCallBack && preCallBack();
            const data = await sendRequest({url: url, ...req_cfg});
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

async function sendRequest(cfg) {
    return axios({...cfg});
}

export default SimpleRequest;