import Rating from './rating';
import propTypes from 'prop-types';
function Popularity({ data }) {
    return (
        <div className="lg:col-start-1 lg:row-start-2">
            <div className="flex items-center justify-center">
                {/* maybe this could work with data && () */}
                {data !== undefined && (
                    <Rating
                        rating={data.vote_average}
                        number={data.vote_count}
                    />
                )}

                <div className="ml-5">
                    <p>👥</p>
                    <p className="text-xl mr-2">{data.popularity}</p>
                </div>
            </div>
        </div>
    );
}

Popularity.propTypes = {
    data: propTypes.object.isRequired,
};

export default Popularity;
