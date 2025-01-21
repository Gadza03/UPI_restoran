import axios from 'axios';
import { API_URL } from '../config-global.ts';

// ----------------------------------------------------------------------

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;

// ----------------------------------------------------------------------

export const endpoints = {
    auth: {
        login: '/api/login',
        register: '/api/register',
    },
    meals: {
        all: '/api/meals',
        daily:'/api/daily-offers',
    },
};
