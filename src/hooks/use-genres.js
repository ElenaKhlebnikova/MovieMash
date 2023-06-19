import { fetchGenresMovie, fetchGenresSeries } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGenres = (idArr, media) => {
    let genres = [];
    const seriesGenre = useQuery({
        queryKey: ['genreSeries'],
        queryFn: fetchGenresSeries,
        enabled: media === 'tv',
    }).data;

    const movieGenre = useQuery({
        queryKey: ['genreMovies'],
        queryFn: fetchGenresMovie,
        enabled: media === 'movie',
    }).data;

    if ((movieGenre ?? seriesGenre) && idArr) {
        const data = movieGenre ?? seriesGenre;

        genres = idArr.map((id) =>
            data.genres.find(
                (gen) => gen.id === (typeof id === 'number' ? id : id.id)
            )
        );
    }

    return genres;
};

export default useGenres;
