import { useQuery } from '@tanstack/react-query';
import { fetchCastAndCrewMovie, fetchCastAndCrewSeries } from '../api';

const useFetchCastCrewMovieOrTv = (id, media) => {
    const { data: seriesData } = useQuery({
        queryKey: ['castAndCrewSeries', id, media],
        queryFn: fetchCastAndCrewSeries,
        enabled: media === 'tv',
    });

    const { data: movieData } = useQuery({
        queryKey: ['castAndCrewMovie', id, media],
        queryFn: fetchCastAndCrewMovie,
        enabled: media === 'movie',
    });

    return movieData ?? seriesData;
};

export default useFetchCastCrewMovieOrTv;
