import Rating from './rating';
import propTypes from 'prop-types';

const Popularity = ({ data }) => {
    return (
        <div className="lg:col-start-1 lg:row-start-2">
            <div className="flex items-center justify-center">
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
};

Popularity.propTypes = {
    data: propTypes.shape,
};

export default Popularity;
