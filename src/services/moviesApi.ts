import axios from "axios";      // Отличие axios от fetch в том что axios возвращает уже распарсиный JSON файл, а fetch нужно отдельно распарсить
import {BASE_URL, API_TOKEN} from './constants';

const agent = axios.create({    // Создаём экземляр axios
    baseURL: BASE_URL,          // Который включает в себя BASE_URL и headers
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    }
});

// И теперь мы може на этом agent вызывать любые http методы get, post, put/patch, delete
// И он автоматически бубдет подставлять нам в headers авторизационный токен
// Чтобы отдельно не делать в каждом методе

export interface Movie {
    title: string;
    id: string;
}

export const getPopularMovies = async (): Promise<Movie[]> => {  
    try {
        const response = await agent({ url: '/movie/popular?language=en-US&page=1'});
        return response.data.results;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error.message);
    }      
};

export const getMovieById = async (id: any): Promise<Movie[]> => {
    try {
        const response = await agent(`/movie/${id}?language=en-US`);
        return response.data;
    }catch(error) {
        throw new Error(error);
    }
}

export const getMovieByQuery = async (query) => {
    try {
        const response = await agent(`/search/movie?query=${query}`);
        return response.data.results;
    } catch(error) {
        throw new Error(error);
    }
}