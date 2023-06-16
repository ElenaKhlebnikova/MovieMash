import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import useFetchSimilarMovieOrTv from '../../../hooks/use-fetch-similar-movie-or-tv';
import Carousel from '../../../components/carousel';

const SimilarLargeScreen = ({ media_type }) => {
    const { id } = useParams();
    const data = useFetchSimilarMovieOrTv(id, media_type);

    return (
        <div
            className={`lg:col-span-2 lg:col-start-1 ${
                media_type === 'tv' ? 'lg:row-start-5' : 'lg:row-start-4'
            }`}
        >
            <h3 className="text-2xl mb-5 mt-10 font-semibold">Similar</h3>
            <Carousel data={data} media_type={media_type} />
        </div>
    );
};

SimilarLargeScreen.propTypes = {
    media_type: propTypes.string.isRequired,
};
export default SimilarLargeScreen;
