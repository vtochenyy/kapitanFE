import { notification } from 'antd';

/**
 * function, that handle all axios response errors
 * @param error - error definition
 * @returns {Promise<never>} - promise chain of axios response
 */

export default function exceptionHandler(error) {
    return Promise.reject(error).catch((error) => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    showError(error.response.data.errorText);
                    break;
                case 500:
                    showError(error.response.data.errorText);
                    break;
                default:
                    showError();
            }
        }
        throw error.response.data;
    });
}

function showError(message) {
    notification.error({
        placement: 'topRight',
        message: 'Уведомление',
        description: message,
    });
}
