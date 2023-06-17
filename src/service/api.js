import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost/validandosc/php/'});

export default api;