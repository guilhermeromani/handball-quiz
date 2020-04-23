import axios from 'axios';

// const api = axios.create({ baseURL: 'https://handball-quiz.herokuapp.com/v1' });
const api = axios.create({ baseURL: 'http://192.168.1.108:3002/v1' });

export default api;