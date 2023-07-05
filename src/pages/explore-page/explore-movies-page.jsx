import { useState, useEffect } from 'react';
import Filter from './components/filter';
import MovieItem from '../../components/movie-item';
import { useQuery } from '@tanstack/react-query';
import { fetchExploreMovies, fetchGenresMovie } from '../../api';

const ExploreMovie = () => {
    const [genreArr, setGenreArr] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);
    const [year, setYear] = useState('');
    const [releasedFrom, setReleasedFrom] = useState('');
    const [releasedTo, setReleasedTo] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [sorting, setSorting] = useState('');

    const filterdGenre = genreArr.filter((gen) => gen.active === true);
    const { data: movieGenre } = useQuery({
        queryKey: ['genreMovie'],
        queryFn: fetchGenresMovie,
    });

    const { data: movies } = useQuery({
        queryKey: [
            'exploreMovies',
            filterdGenre,
            minRating,
            maxRating,
            year,
            releasedFrom,
            releasedTo,
            countryCode,
            sorting,
        ],
        queryFn: fetchExploreMovies,
    });

    useEffect(() => {
        let genre = [];
        if (genre && movieGenre)
            movieGenre.genres.map((gen) =>
                genre.push({ ...gen, active: false })
            );
        setGenreArr(genre);
    }, [movieGenre]);

    return (
        <div className="grid grid-cols-3 mx-10 ">
            <Filter
                props={{
                    genreArr,
                    minRating,
                    maxRating,
                    setGenreArr,
                    setMinRating,
                    setMaxRating,
                    setYear,
                    setReleasedTo,
                    setReleasedFrom,
                    country,
                    setCountry,
                    countryCode,
                    setCountryCode,
                    setSorting,
                }}
            />
            <div className="grid grid-cols-2 col-span-2 ">
                {movies &&
                    movies.results.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            item={movie}
                            media_type="movie"
                            extended={true}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ExploreMovie;
