import { URL } from '@utils/constants';
import axios from 'axios';
const BASE_URL = URL
const token = localStorage.getItem("token")
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
       'authorization':token
    }
})

export { api };