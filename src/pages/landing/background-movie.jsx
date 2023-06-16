import propTypes from 'prop-types';
import Rating from '../../components/rating';
import { Link } from 'react-router-dom';

const BackgroundMovie = ({ item }) => {
    if (!item) return null;
    return (
        <Link to={`/${item.media_type}/${item.id}}`}>
            <div className="mb-6 hover:cursor-pointer">
                <h3>{item.title}</h3>
                <Rating rating={item.vote_average} number={item.vote_count} />
            </div>
        </Link>
    );
};

BackgroundMovie.propTypes = {
    item: propTypes.object.isRequired,
};
export default BackgroundMovie;
