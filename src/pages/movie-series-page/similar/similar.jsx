import { useParams } from 'react-router-dom';
import MovieItem from '../../../components/movie-item';
import { useEffect, useState } from 'react';
import useFetchSimilarMovieOrTv from '../../../hooks/use-fetch-similar-movie-or-tv';
import propTypes from 'prop-types';
function Similar({ media_type }) {
    const { id } = useParams();
    const data = useFetchSimilarMovieOrTv(id, media_type);
    const [mediaDisplayed, setmediaDisplayed] = useState();
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index === data.results.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        setmediaDisplayed(data.results[index]);
    };

    const handlePrev = () => {
        if (index === 0) {
            setIndex(data.results.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    useEffect(() => {
        if (data) {
            setmediaDisplayed(data.results[index]);
        }
    }, [index, data]);

    return (
        <div>
            <div>
                {data && mediaDisplayed !== undefined && (
                    <MovieItem
                        key={mediaDisplayed.id}
                        item={mediaDisplayed}
                        media_type={media_type}
                    />
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

Similar.propTypes = {
    media_type: propTypes.string.isRequired,
};
export default Similar;
