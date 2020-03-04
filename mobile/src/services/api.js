import axios from 'axios';

const api = axios.create({ baseURL: 'https://handball-quiz.herokuapp.com/v1' });

export default api;