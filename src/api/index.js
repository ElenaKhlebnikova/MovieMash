const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        // before starting with testing, this is really important to fix and it's very easy, check this link
        // https://vitejs.dev/guide/env-and-mode.html
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjA4MTUzNjMzNzM3MTAwNzM3NzI0ZDQ2N2E5M2QzYSIsInN1YiI6IjY0NzVkMTE4ZGQyNTg5MDEyMDA1ZTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rO_E2ULkrBXLFMvl92-gnZdQHoqGWd0gmkRP4cGi9n0',
    },
};

export const fetchMulti = async (value) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${value.queryKey}&include_adult=false&language=en-US&page=1`,
        options
    );
    return response.json();
};

export const fetchGenres = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',
        options
    );

    return response.json();
};

export const fetchCastAndCrewSeries = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${queryKey[1]}/aggregate_credits?language=en-US`,
        options
    );

    return response.json();
};

export const fetchCastAndCrewMovie = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${queryKey[1]}/credits?language=en-US`,
        options
    );

    return response.json();
};

export const fetchOneMovie = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/${queryKey[1]}/${queryKey[0]}?language=en-US`,
        options
    );

    return response.json();
};

export const fetchOnePerson = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${queryKey[1]}?language=en-US`,
        options
    );

    return response.json();
};

export const fetchPersonCredits = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${queryKey[1]}/combined_credits?language=en-US`,
        options
    );
    return response.json();
};

export const fetchSimilarMovies = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${queryKey[1]}/similar?language=en-US&page=1`,
        options
    );

    return response.json();
};

export const fetchSimilarSeries = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${queryKey[1]}/similar?language=en-US&page=1`,
        options
    );

    return response.json();
};

export const fetchTrendingMovies = async ({ queryKey }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${queryKey[1]}?language=en-US`,
        options
    );

    return response.json();
};
