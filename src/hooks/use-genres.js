import { fetchGenresMovie, fetchGenresSeries } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGenres = (idArr) => {
    let genres = [];
    const { data: seriesGenre } = useQuery({
        queryKey: ['genreSeries'],
        queryFn: fetchGenresSeries,
    });

    const { data: movieGenre } = useQuery({
        queryKey: ['genreMovies'],
        queryFn: fetchGenresMovie,
    });

    let allGen = [];

    seriesGenre && seriesGenre.genres.map((gen) => allGen.push(gen));
    movieGenre && movieGenre.genres.map((gen) => allGen.push(gen));

    if (allGen && idArr) {
        // const data = seriesGenre ?? movieGenre;

        genres = idArr.map((id) =>
            allGen.find(
                (gen) => gen.id === (typeof id === 'number' ? id : id.id)
            )
        );
    }

    return genres;
};

export default useGenres;
