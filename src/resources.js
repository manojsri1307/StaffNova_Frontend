import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/'

// export const resources = {
//     API_URL : API_URL
// }

const API = axios.create({
  baseURL: API_URL, // your Django backend
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;