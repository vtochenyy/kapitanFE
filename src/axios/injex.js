import axios from 'axios';
import exceptionHandler from './exceptionHandler';

/**
 * register axios interceptors
 */
const axiosInterceptors = () => {
    axios.interceptors.response.use(
        (response) => response,
        (error) => exceptionHandler(error)
    );
};

export default axiosInterceptors;
