import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSimilarMovies } from '../../../api';
import MovieItem from '../../../components/movie-item';
import { useEffect, useState } from 'react';

function Similar() {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['similar', id],
        queryFn: fetchSimilarMovies,
    });

    const [movieDisplayed, setMovieDisplayed] = useState();
    const [index, setIndex] = useState(0);

    console.log({ curr: index });
    const handleNext = () => {
        console.log({
            next: index,
        });
        if (index === data.results.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        setMovieDisplayed(data.results[index]);
    };

    const handlePrev = () => {
        console.log({
            prev: index,
        });
        if (index === 0) {
            setIndex(data.results.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    useEffect(() => {
        if (data) {
            console.log(data);

            setMovieDisplayed(data.results[index]);
        }
    }, [isLoading, index]);

    return (
        <div className="">
            <div>
                {data && movieDisplayed !== undefined && (
                    <MovieItem key={movieDisplayed.id} item={movieDisplayed} />
                )}
            </div>
            <div className="flex justify-between text-lg font-bold">
                <button
                    onClick={() => handlePrev()}
                    className="hover:cursor-pointer"
                >
                    &larr;
                </button>
                <button
                    onClick={() => handleNext()}
                    className="hover:cursor-pointer"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
}

export default Similar;
