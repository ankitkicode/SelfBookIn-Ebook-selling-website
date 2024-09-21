// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', 
    'Content-Type': 'application/json',
  },);
  

export default axiosInstance;
