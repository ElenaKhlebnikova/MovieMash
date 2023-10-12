import { getStringWithQueries } from './utils';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TOKEN,
    },
};

const url = import.meta.env.VITE_URL;
const ACCOUNT_ID = import.meta.env.ACCOUNT_ID;

export const fetchMulti = async (value) => {
    const response = await fetch(
        `${url}/search/multi?query=${value.queryKey}&include_adult=false&language=en-US&page=1`,
        options
    );
    return response.json();
};

export const fetchGenresMovie = async () => {
    const response = await fetch(
        `${url}/genre/movie/list?language=en`,
        options
    );

    return response.json();
};

export const fetchGenresSeries = async () => {
    const response = await fetch(`${url}/genre/tv/list?language=en`, options);

    return response.json();
};
export const fetchCastAndCrewSeries = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/tv/${queryKey[1]}/aggregate_credits?language=en-US`,
        options
    );

    return response.json();
};

export const fetchCastAndCrewMovie = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/movie/${queryKey[1]}/credits?language=en-US`,
        options
    );

    return response.json();
};

export const fetchOneMovieOrSeries = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/${queryKey[1]}/${queryKey[0]}?language=en-US`,
        options
    );

    return response.json();
};

export const fetchOnePerson = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/person/${queryKey[1]}?language=en-US`,
        options
    );

    return response.json();
};

export const fetchPersonCredits = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/person/${queryKey[1]}/combined_credits?language=en-US`,
        options
    );
    return response.json();
};

export const fetchSimilarMovies = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/movie/${queryKey[1]}/similar?language=en-US&page=1`,
        options
    );

    return response.json();
};

export const fetchSimilarSeries = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/tv/${queryKey[1]}/similar?language=en-US&page=1`,
        options
    );

    return response.json();
};

export const fetchTrendingMovies = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/trending/movie/${queryKey[1]}?language=en-US`,
        options
    );

    return response.json();
};

export const fetchTrendingSeries = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/trending/tv/${queryKey[1]}?language=en-US`,

        options
    );

    return response.json();
};

export const fetchTrendingPeople = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/trending/person/${queryKey[1]}?language=en-US`,

        options
    );

    return response.json();
};

export const fetchExploreMovies = async ({ queryKey }) => {
    const response = await fetch(
        getStringWithQueries('movie', queryKey),

        options
    );

    return response.json();
};

export const fetchExploreTv = async ({ queryKey }) => {
    const response = await fetch(
        getStringWithQueries('tv', queryKey),

        options
    );

    return response.json();
};

export const createRequestToken = async () => {
    fetch('https://api.themoviedb.org/3/authentication/token/new', options)
        .then((res) => res.json())
        .then((resp) => {
            window.location.replace(
                `https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:5173/approved`
            );
        });
};

export const createSessionId = async (REQUEST_TOKEN) => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: import.meta.env.VITE_TOKEN,
        },
        body: JSON.stringify({
            request_token: REQUEST_TOKEN,
        }),
    };

    const response = await fetch(
        'https://api.themoviedb.org/3/authentication/session/new',
        options
    );
    const res = await response.json();
    if (res.success === true) {
        document.cookie = `session_id=${res.session_id}`;
    }
};

export const getUserInformation = async (SESSION_ID) => {
    if (SESSION_ID.queryKey[0] !== '') {
        const response = await fetch(
            `https://api.themoviedb.org/3/account/${ACCOUNT_ID}?${SESSION_ID.queryKey[0]}`,
            options
        );
        return response.json();
    } else return 'NOT_AUTH';
};
