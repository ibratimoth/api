// axiosInstance.js
const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for API requests
    timeout: 5000, // Optional timeout
});

module.exports = axiosInstance;