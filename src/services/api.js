import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: Add auth token to all requests
api.interceptors.request.use(
  (cfg) => {
    const token = localStorage.getItem("token");
    if (token) {
      cfg.headers.Authorization = `Bearer ${token}`;
    }
    return cfg;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle 401 errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      // Clear auth data and redirect to login
      localStorage.removeItem("token");
      window.location.assign("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
