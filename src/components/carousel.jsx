import MovieItem from './movie-item';
import propTypes from 'prop-types';

const Carousel = ({ data, media_type }) => {
    if (!data) return null;
    return (
        <div id="scroll-movie-parent">
            <div className="lg:flex" id="movie-scroll">
                {data.results.map((item) => {
                    return (
                        <MovieItem
                            key={item.id}
                            item={item}
                            media_type={media_type}
                        />
                    );
                })}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    data: propTypes.object.isRequired,
    media_type: propTypes.string.isRequired,
};
export default Carousel;
