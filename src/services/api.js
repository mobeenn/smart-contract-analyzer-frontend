import axios from "axios";

// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "https://smart-contract-analyzer-frontend-v8.vercel.app/";

const api = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      "Content-Type": "application/json",
   },
});

// Request interceptor to add auth token
api.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem("token");
      if (token) {
         config.headers.Authorization = token;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   },
);

// Response interceptor to handle errors
api.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response?.status === 401) {
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         window.location.href = "/login";
      }
      return Promise.reject(error);
   },
);

// Auth API
export const authAPI = {
   signup: (data) => api.post("/auth/signup", data),
   login: (data) => api.post("/auth/login", data),
};

// Analyze API
export const analyzeAPI = {
   analyzeContract: (code) => api.post("/analyze", { code }),
};

// Reports API
export const reportsAPI = {
   getReports: () => api.get("/reports"),
};

export default api;
