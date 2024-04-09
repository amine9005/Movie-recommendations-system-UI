import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './ApiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params:any) => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async (config:any) => config);

axiosClient.interceptors.response.use((response:any) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error:Error) => {
    throw error;
});

export default axiosClient;