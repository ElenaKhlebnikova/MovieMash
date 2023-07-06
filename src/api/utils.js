const url = import.meta.env.VITE_URL;

export const getStringWithQueries = (media, queryKey) => {
    const genreStr = queryKey[1].map((gen) => gen.id).join(',');
    let urlWithQueries = `${url}/discover/${media}?include_adult=false&include_video=false&language=en-US&page=${queryKey[9]}`;
    if (genreStr) {
        urlWithQueries = urlWithQueries + '&with_genres=' + genreStr;
    }
    if (queryKey[2]) {
        urlWithQueries = urlWithQueries + '&vote_average.gte=' + queryKey[2];
    }
    if (queryKey[3]) {
        urlWithQueries = urlWithQueries + '&vote_average.lte=' + queryKey[3];
    }
    if (queryKey[4]) {
        urlWithQueries =
            urlWithQueries + '&primary_release_year=' + queryKey[4];
    }
    if (queryKey[5]) {
        urlWithQueries =
            urlWithQueries + '&primary_release_date.gte=' + queryKey[5];
    }
    if (queryKey[6]) {
        urlWithQueries =
            urlWithQueries + '&primary_release_date.lte=' + queryKey[6];
    }
    if (queryKey[7]) {
        urlWithQueries = urlWithQueries + '&with_origin_country=' + queryKey[7];
    }
    if (queryKey[8]) {
        urlWithQueries = urlWithQueries + '&sort_by=' + queryKey[8];
    }

    return encodeURI(urlWithQueries);
};
