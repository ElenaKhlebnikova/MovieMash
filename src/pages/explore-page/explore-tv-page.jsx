import { useState, useEffect } from 'react';
import Filter from './components/filter';
import MovieItem from '../../components/movie-item';
import { useQuery } from '@tanstack/react-query';
import { fetchExploreTv, fetchGenresSeries } from '../../api';
import Pagination from '../../components/pagination';

const ExploreTvPage = () => {
    const [genreArr, setGenreArr] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(10);
    const [year, setYear] = useState('');
    const [releasedFrom, setReleasedFrom] = useState('');
    const [releasedTo, setReleasedTo] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [sorting, setSorting] = useState('');
    const [page, setPage] = useState(1);

    const filterdGenre = genreArr.filter((gen) => gen.active === true);
    const { data: tvGenre } = useQuery({
        queryKey: ['genreTv'],
        queryFn: fetchGenresSeries,
    });

    const { data: tv } = useQuery({
        queryKey: [
            'exploreTv',
            filterdGenre,
            minRating,
            maxRating,
            year,
            releasedFrom,
            releasedTo,
            countryCode,
            sorting,
            page,
        ],
        queryFn: fetchExploreTv,
    });

    useEffect(() => {
        let genre = [];
        if (genre && tvGenre)
            tvGenre.genres.map((gen) => genre.push({ ...gen, active: false }));
        setGenreArr(genre);
    }, [tvGenre]);

    return (
        <>
            {tv && (
                <Pagination
                    total_pages={tv.total_pages > 500 ? 500 : tv.total_pages}
                    page={page}
                    setPage={setPage}
                />
            )}

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
                    {tv &&
                        tv.results &&
                        tv.results.map((movie) => (
                            <MovieItem
                                key={movie.id}
                                item={movie}
                                media_type="tv"
                                extended={true}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default ExploreTvPage;
