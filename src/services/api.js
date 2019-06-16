import axios from 'axios';

const api = axios.create({
    baseURL: 'https://idogram.herokuapp.com',
})

export default api