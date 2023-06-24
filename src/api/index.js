const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TOKEN,
    },
};

const url = import.meta.env.VITE_URL;

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
