import Carousel from '../../../components/carousel';
import propTypes from 'prop-types';

const Trending = ({ items }) => {
    return (
        <div className="mt-10 text-2xl ">
            <Carousel data={items} />
        </div>
    );
};

Trending.propTypes = {
    items: propTypes.object.isRequired,
};

export default Trending;
