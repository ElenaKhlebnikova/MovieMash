import Carousel from '../../../components/carousel';
import propTypes from 'prop-types';

const Trending = ({ items, today }) => {
    return (
        <div className="mt-10 text-2xl ">
            <h3 className="my-5 text-left ml-10">
                Trending {today ? 'today' : 'this week'}
            </h3>
            <Carousel data={items} />
        </div>
    );
};

Trending.propTypes = {
    items: propTypes.object.isRequired,
    today: propTypes.bool.isRequired,
};

export default Trending;
