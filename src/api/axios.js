import axios from "axios";

const api = axios.create({
  baseURL: "https://feedback-server-euh6.onrender.com/api",
  withCredentials: true, // 🔥 REQUIRED FOR COOKIES
});

export default api;
