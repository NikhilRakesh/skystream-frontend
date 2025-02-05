import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://skystream.in/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
