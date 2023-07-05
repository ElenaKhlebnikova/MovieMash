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

export const fetchTrendingPeople = async ({ queryKey }) => {
    const response = await fetch(
        `${url}/trending/person/${queryKey[1]}?language=en-US`,

        options
    );

    return response.json();
};

export const fetchExploreMovies = async ({ queryKey }) => {
    const genreStr = queryKey[1].map((gen) => gen.id + '%2C%20').join('');

    const response = await fetch(
        `${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1${
            genreStr && '&with_genres=' + genreStr
        }${queryKey[2] && '&vote_average.gte=' + queryKey[2]}${
            queryKey[3] &&
            queryKey[3] !== 10 &&
            '&vote_average.lte=' + queryKey[3]
        }${queryKey[4] && '&primary_release_year=' + queryKey[4]}
        ${queryKey[5] && '&primary_release_date.gte=' + queryKey[5]}${
            queryKey[6] && '&primary_release_date.lte=' + queryKey[6]
        }${queryKey[7] && '&with_origin_country=' + queryKey[7]}
        ${queryKey[8] && '&sort_by=' + queryKey[8]}`,

        options
    );

    return response.json();
};

export const fetchExploreTv = async ({ queryKey }) => {
    const genreStr = queryKey[1].map((gen) => gen.id + '%2C%20').join('');
    console.log(queryKey);

    const response = await fetch(
        `${url}/discover/tv?include_adult=false&include_video=false&language=en-US&page=1${
            genreStr && '&with_genres=' + genreStr
        }${queryKey[2] && '&vote_average.gte=' + queryKey[2]}${
            queryKey[3] && '&vote_average.lte=' + queryKey[3]
        }${queryKey[4] && '&primary_release_year=' + queryKey[4]}
        ${queryKey[5] && '&primary_release_date.gte=' + queryKey[5]}${
            queryKey[6] && '&primary_release_date.lte=' + queryKey[6]
        }${queryKey[7] && '&with_origin_country=' + queryKey[7]}
        ${queryKey[8] && '&sort_by=' + queryKey[8]}`,

        options
    );

    return response.json();
};
