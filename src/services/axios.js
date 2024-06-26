import axios from 'axios';

// Check if the environment variables are being read correctly
console.log(import.meta.env.VITE_BASE_URI);
console.log(import.meta.env.VITE_LICHESS_API_KEY);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = import.meta.env.VITE_LICHESS_API_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
