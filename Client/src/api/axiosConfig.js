import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    withCredentials: true
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // Add required headers
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        config.headers['X-App-Token'] = process.env.REACT_APP_SECRET || 'dfkjdskkdvkdkfdfdcnmklxckdkdnkdnfkdfakslkldfkdfkldfkj4534tf8fuy83riehf8y49hrt';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
