import axios from 'axios'

const api_boredapi = axios.create({
    baseURL: 'http://www.boredapi.com/api',
})

export default api_boredapi