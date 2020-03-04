import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3002/v1' });

export default api;