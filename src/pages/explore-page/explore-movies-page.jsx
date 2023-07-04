/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchExploreMovies, fetchGenresMovie } from '../../api';
import { getClassNameFromGenre } from '../../utils';
import { countries } from '../../utils/countries-list';

const ExploreMoviesPage = () => {
    const [genreArr, setGenreArr] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);
    const [year, setYear] = useState('');
    const [releasedFrom, setReleasedFrom] = useState('');
    const [releasedTo, setReleasedTo] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const filterdGenre = genreArr.filter((gen) => gen.active === true);
    const { data: movieGenre } = useQuery({
        queryKey: ['genreMovies'],
        queryFn: fetchGenresMovie,
    });

    console.log(country);
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
        ],
        queryFn: fetchExploreMovies,
    });

    console.log(movies);
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

    if (genreArr === []) return null;
    return (
        <div className="flex flex-col items-start">
            <div>
                <h3>Genres</h3>
                <div className="w-1/4 flex flex-wrap justify-center align-middle ">
                    {genreArr &&
                        genreArr.map((gen) => {
                            return (
                                <button
                                    onClick={() => handleClick(gen.id)}
                                    key={gen.id}
                                    className={`mx-3 my-2 flex rounded-md px-3  ${
                                        !gen.active
                                            ? 'border border-gray-200'
                                            : 'bg-gradient-to-r ' +
                                              getClassNameFromGenre(gen.name)
                                    }`}
                                >
                                    {gen.name}
                                </button>
                            );
                        })}
                </div>
            </div>
            <div className="relative w-1/4 mt-10 justify-self-start bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg h-2">
                <div className="grid grid-flow-col justify-stretch absolute top-0 w-full">
                    <div
                        className={`${
                            minRating > 0 ? 'bg-neutral-800 h-2' : 'h-0'
                        } `}
                    ></div>
                    <div
                        className={`${
                            minRating > 1 || maxRating < 1
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 2 || maxRating < 2
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 3 || maxRating < 3
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 4 || maxRating < 4
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        } `}
                    ></div>
                    <div
                        className={`${
                            minRating > 5 || maxRating < 5
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 6 || maxRating < 6
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 7 || maxRating < 7
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 8 || maxRating < 8
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 9 || maxRating < 9
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        } `}
                    ></div>
                    <div
                        className={` ${
                            maxRating < 10 ? 'bg-neutral-800 h-2  ' : 'h-0'
                        }  `}
                    ></div>
                </div>
                <div className="grid grid-flow-col justify-stretch w-full mt-3">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <input
                    className="height-0"
                    id="min"
                    type="range"
                    value={minRating}
                    min={0}
                    max={10}
                    step={1}
                    onChange={handleMinChange}
                />

                <input
                    type="range"
                    value={maxRating}
                    min={0}
                    max={10}
                    step={1}
                    onChange={handleMaxChange}
                />
            </div>
            <div className="mt-10 flex">
                <label className="mr-3" htmlFor="year">
                    Release year:
                </label>
                <input
                    className="text-neutral-700 rounded-lg"
                    type="number"
                    id="year"
                    min="0"
                    max="3000"
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className="mt-10 flex justify-between space-x-2">
                <label htmlFor="released-from">Released from</label>

                <input
                    className="rounded-lg  text-neutral-700  focus:outline-violet-500"
                    type="date"
                    id="released-from"
                    name="trip-start"
                    value={releasedFrom}
                    min="1930-01-01"
                    max={releasedTo}
                    onChange={(e) => {
                        setReleasedFrom(e.target.value);
                        setYear('');
                    }}
                ></input>

                <label htmlFor="released-to">to</label>

                <input
                    className="rounded-lg  text-neutral-700  focus:outline-violet-500"
                    type="date"
                    id="released-to"
                    name="trip-start"
                    value={releasedTo}
                    min={releasedFrom}
                    max="2050-12-31"
                    onChange={(e) => {
                        setReleasedTo(e.target.value);
                        setYear('');
                    }}
                ></input>
            </div>
            <div className=" flex flex-col w-1/4 mt-20">
                <div>
                    <label htmlFor="country">Country</label>

                    <input
                        className={`${
                            country
                                ? 'rounded-lg rounded-b-none'
                                : 'rounded-lg '
                        }  w-full text-neutral-700  focus:outline-none focus:ring focus:border-violet-500 `}
                        type="text"
                        id="released-to"
                        name="trip-start"
                        value={country}
                        min={releasedFrom}
                        max="2050-12-31"
                        placeholder={countryCode ?? 'Enter country name'}
                        onChange={(e) => {
                            setCountry(e.target.value);
                        }}
                    />
                </div>
                <div
                    className={`${
                        country
                            ? 'max-h-32 p-1  rounded-b-lg  bg-white text-neutral-700 w-full  overflow-y-scroll'
                            : 'hidden'
                    }`}
                >
                    <ul>
                        {country &&
                            countries.map(
                                (coun) =>
                                    coun.name
                                        .toUpperCase()
                                        .includes(country.toUpperCase()) && (
                                        <li
                                            onClick={() => {
                                                setCountryCode(coun.code);
                                                setCountry('');
                                            }}
                                            key={coun.code}
                                        >
                                            {coun.name}
                                        </li>
                                    )
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExploreMoviesPage;
