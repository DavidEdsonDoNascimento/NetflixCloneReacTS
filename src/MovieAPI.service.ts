import Movie from './interfaces/Movie';

const basicFetch = async (endpoint: string): Promise<any> => {
    const req = await fetch(`https://api.themoviedb.org/3${endpoint}`);
    const json = await req.json();
    return json;
}

export default abstract class MovieAPI {

    private static NETFLIX_CODE: string = '213';
    private static LANGUAGE: string = 'language=pt-BR';
    private static API_KEY: string = `api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
    private static GENRES: any = {
        ACTION: 28,
        COMEDY: 35,
        HORROR: 27,
        ROMANCE: 10749,
        DOCUMENTARY: 99
    };

    static async getHomeList(): Promise<Movie[]> {

        const movies: Movie[] = [
            {
                slugs: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=${MovieAPI.NETFLIX_CODE}&${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=${MovieAPI.GENRES.ACTION}&${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=${MovieAPI.GENRES.COMEDY}&${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=${MovieAPI.GENRES.HORROR}&${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=${MovieAPI.GENRES.ROMANCE}&${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            },
            {
                slugs: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=${MovieAPI.GENRES.DOCUMENTARY}&${MovieAPI.LANGUAGE}&${MovieAPI.API_KEY}`)
            }
        ];

        return movies;
    }
}