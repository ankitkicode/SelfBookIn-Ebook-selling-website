// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://selfbookin-ebook-selling-website-web.onrender.com/api', 
    'Content-Type': 'application/json',
  },);
  

export default axiosInstance;
