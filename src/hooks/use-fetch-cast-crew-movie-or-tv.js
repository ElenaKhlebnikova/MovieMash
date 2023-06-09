import { useQuery } from '@tanstack/react-query';
import { fetchCastAndCrewMovie, fetchCastAndCrewSeries } from '../api';

const useFetchCastCrewMovieOrTv = (id, media) => {
    const seriesData = useQuery({
        queryKey: ['castAndCrewSeries', id, media],
        queryFn: fetchCastAndCrewSeries,
        enabled: media === 'tv',
    }).data;
    const movieData = useQuery({
        queryKey: ['castAndCrewMovie', id, media],
        queryFn: fetchCastAndCrewMovie,
        enabled: media === 'movie',
    }).data;

    const data = seriesData ? seriesData : movieData;
    return data;
};

export default useFetchCastCrewMovieOrTv;
