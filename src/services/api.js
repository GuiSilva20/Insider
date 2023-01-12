import axios from 'axios';

// URLFILMES EM CARTAZ
// https://api.themoviedb.org/3/movie/now_playing?api_key=113fefd9d5d9491beb320e04a6920c19&language=pt-BR&page=1

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export const key = '113fefd9d5d9491beb320e04a6920c19'

export default api;