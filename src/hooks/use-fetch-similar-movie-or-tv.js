import { useQuery } from '@tanstack/react-query';
import { fetchSimilarMovies, fetchSimilarSeries } from '../api';

const useFetchSimilarMovieOrTv = (id, media) => {
    const seriesData = useQuery({
        queryKey: ['similarMovies', id, media],
        queryFn: fetchSimilarMovies,
        enabled: media === 'movie',
    }).data;

    const movieData = useQuery({
        queryKey: ['similarSeries', id, media],
        queryFn: fetchSimilarSeries,
        enabled: media === 'tv',
    }).data;

    const data = seriesData ? seriesData : movieData;
    return data;
};

export default useFetchSimilarMovieOrTv;
