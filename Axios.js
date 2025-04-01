import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://skystream.in/api",
  // baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export  const  StreambaseURL= "https://live.skystream.in/api/"

export default axiosInstance;
