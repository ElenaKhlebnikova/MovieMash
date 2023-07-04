/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchExploreMovies, fetchGenresMovie } from '../../api';
import GenreSelector from './components/genre-selector';
import RatingSelector from './components/rating-selector';
import DateSelector from './components/date-selector';
import CountrySelector from './components/country-selector';
import SortingSelector from './components/sorting-selector';
import MovieItem from '../../components/movie-item';

const ExploreMoviesPage = () => {
    const [genreArr, setGenreArr] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);
    const [year, setYear] = useState('');
    const [releasedFrom, setReleasedFrom] = useState('');
    const [releasedTo, setReleasedTo] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [sorting, setSorting] = useState('');

    //Functions to handle genres
    const filterdGenre = genreArr.filter((gen) => gen.active === true);
    const { data: movieGenre } = useQuery({
        queryKey: ['genreMovies'],
        queryFn: fetchGenresMovie,
    });

    let genre = [];

    useEffect(() => {
        if (genre && movieGenre)
            movieGenre.genres.map((gen) =>
                genre.push({ ...gen, active: false })
            );
        setGenreArr(genre);
    }, [movieGenre]);

    const handleClick = (id) => {
        const newArr = genreArr.map((gen) => {
            if (gen.id === id) {
                return { ...gen, active: !gen.active };
            }

            return gen;
        });

        setGenreArr(newArr);
    };

    //Functions to handle rating
    const handleMinChange = (event) => {
        event.preventDefault();
        const value = parseFloat(event.target.value);
        const newMinRating = Math.min(value, maxRating - 1);
        setMinRating(newMinRating);
    };

    const handleMaxChange = (event) => {
        event.preventDefault();
        const value = parseFloat(event.target.value);
        const newMaxRating = Math.max(value, minRating + 1);
        setMaxRating(newMaxRating);
    };

    // Fetching filtered data
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

    if (genreArr === []) return null;
    return (
        <div className="grid grid-cols-3 mx-10 ">
            <div className="flex  flex-col items-start ml-10 mt-20">
                <SortingSelector setSorting={setSorting} />
                <GenreSelector onClick={handleClick} genreArr={genreArr} />
                <RatingSelector
                    maxRating={maxRating}
                    minRating={minRating}
                    handleMaxChange={handleMaxChange}
                    handleMinChange={handleMinChange}
                />

                <DateSelector
                    releasedFrom={releasedFrom}
                    releasedTo={releasedTo}
                    year={year}
                    setYear={setYear}
                    setReleasedFrom={setReleasedFrom}
                    setReleasedTo={setReleasedTo}
                />
                <CountrySelector
                    country={country}
                    countryCode={countryCode}
                    setCountry={setCountry}
                    setCountryCode={setCountryCode}
                />
            </div>
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

export default ExploreMoviesPage;
