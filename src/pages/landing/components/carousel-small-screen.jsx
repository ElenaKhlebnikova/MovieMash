import { useState, useEffect } from 'react';
import MovieItem from '../../../components/movie-item';
import propTypes from 'prop-types';

function CarouselSmallScreen({ data }) {
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

    if (!data || !mediaDisplayed) return null;

    return (
        <div className="mx-5">
            <div>
                <MovieItem key={mediaDisplayed.id} item={mediaDisplayed} />
            </div>
            <div className="flex justify-between text-lg font-bold">
                <button
                    data-testid="prev-item"
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

CarouselSmallScreen.propTypes = {
    data: propTypes.object.isRequired,
    media_type: propTypes.string.isRequired,
};

export default CarouselSmallScreen;
