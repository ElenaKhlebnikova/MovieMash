import MovieItem from './movie-item';
import propTypes from 'prop-types';

function Carousel({ data, media_type }) {
    return (
        <div id="scroll-movie-parent">
            <div className="lg:flex" id="movie-scroll">
                {data &&
                    data.results.map((item) => {
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
}

Carousel.propTypes = {
    data: propTypes.object.isRequired,
    media_type: propTypes.string.isRequired,
};
export default Carousel;
