import axios from 'axios'

const api_localhost = axios.create({
    baseURL: 'http://localhost/hvex-api/api',
})

export default api_localhost