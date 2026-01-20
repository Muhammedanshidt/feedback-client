import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true, // 🔥 REQUIRED FOR COOKIES
});

export default api;
