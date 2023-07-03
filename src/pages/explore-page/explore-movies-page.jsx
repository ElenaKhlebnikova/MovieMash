/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchExploreMovies, fetchGenresMovie } from '../../api';
import { getClassNameFromGenre } from '../../utils';

const ExploreMoviesPage = () => {
    const [starred, setStarred] = useState('');
    const [genreArr, setGenreArr] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);

    const filterdGenre = genreArr.filter((gen) => gen.active === true);
    const { data: movieGenre } = useQuery({
        queryKey: ['genreMovies'],
        queryFn: fetchGenresMovie,
    });

    const { data: movies } = useQuery({
        queryKey: ['exploreMovies', filterdGenre],
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
                <label htmlFor="starred" />
                <input
                    id="starred"
                    value={starred}
                    onChange={(e) => setStarred(e.target.value)}
                />
            </div>

            <div>
                <h3>Genres</h3>
                <div className="w-1/4 flex flex-wrap justify-center align-middle ">
                    {genreArr !== [] &&
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
        </div>
    );
};

export default ExploreMoviesPage;
