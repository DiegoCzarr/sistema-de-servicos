import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://manager-test.infog2.com.br:8010/'
})