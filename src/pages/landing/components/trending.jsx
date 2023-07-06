import propTypes from 'prop-types';
import Carousel from '../../../components/carousel';
import PersonOverview from '../../../components/person-overview';

const Trending = ({ movieOrTvData, peopleData }) => {
    const fitstFivePeople = peopleData && peopleData.results.slice(0, 5);
    const theRestPeople =
        peopleData && peopleData.results.slice(6, peopleData.length);

    return (
        <div className="mt-10 text-2xl ">
            {movieOrTvData && <Carousel data={movieOrTvData} />}
            {peopleData && (
                <PersonOverview
                    dataFirstFive={fitstFivePeople}
                    dataAll={theRestPeople}
                />
            )}
        </div>
    );
};

Trending.propTypes = {
    movieOrTvData: propTypes.object,
    peopleData: propTypes.object,
};

export default Trending;
