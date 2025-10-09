import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: Add auth token and timing to all requests
api.interceptors.request.use(
  (cfg) => {
    // Add request start time for performance tracking
    cfg.metadata = { startTime: new Date() };
    
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

// Response interceptor: Handle 401 errors and log performance
api.interceptors.response.use(
  (response) => {
    // Calculate request duration
    if (response.config.metadata) {
      const duration = new Date() - response.config.metadata.startTime;
      const url = response.config.url;
      const method = response.config.method.toUpperCase();
      
      // Log slow requests (> 1 second)
      if (duration > 1000) {
        console.warn(`⚠️ Slow API call: ${method} ${url} took ${duration}ms`);
      } else {
        console.log(`✅ ${method} ${url} - ${duration}ms`);
      }
    }
    return response;
  },
  (error) => {
    // Log failed request timing
    if (error.config?.metadata) {
      const duration = new Date() - error.config.metadata.startTime;
      const url = error.config.url;
      const method = error.config.method?.toUpperCase();
      console.error(`❌ ${method} ${url} failed after ${duration}ms`);
    }
    
    if (error?.response?.status === 401) {
      // Clear auth data and redirect to login
      localStorage.removeItem("token");
      window.location.assign("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
