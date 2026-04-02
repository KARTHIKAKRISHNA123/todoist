import axios from 'axios';

// CHANGE 1: We replaced the localhost fallback with your actual Zoho URL.
// CHANGE 2: We added a console.log so we can see exactly what Vercel built.
const API_URL = import.meta.env.VITE_API_BASE_URL || 'https://springreacttodobykk-50040626068.development.catalystappsail.in';

console.log("React is officially routing traffic to:", API_URL);

const api = axios.create({
    baseURL: API_URL,
});

// Interceptor: Automatically attach the JWT token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;