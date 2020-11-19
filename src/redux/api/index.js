import axios from 'axios'

const baseURL = 'https://www.omdbapi.com/?apiKey=ffd0c3a5'

export const apiCall = (url, data, headers, method) => ({
    method, 
    url: baseURL + URL,
    data,
    headers
})