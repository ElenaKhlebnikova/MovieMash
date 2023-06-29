import propTypes from 'prop-types';
import Carousel from '../../../components/carousel';
import PersonOverview from '../../../components/person-overview';

const Trending = ({ movieOrTvData, peopleData }) => {
    console.log(peopleData);
    return (
        <div className="mt-10 text-2xl ">
            {movieOrTvData && <Carousel data={movieOrTvData} />}
            {peopleData && <PersonOverview data={peopleData} />}
        </div>
    );
};

Trending.propTypes = {
    movieOrTvData: propTypes.object,
    peopleData: propTypes.object,
};

export default Trending;
