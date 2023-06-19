import propTypes from 'prop-types';
import SimilarSmallScreen from './similar-small-screen';
import SimilarLargeScreen from './similar-large-screen';
import { getScreenWidth } from '../../../utils';

const Similar = ({ media_type }) => {
    const device = getScreenWidth();

    return (
        <>
            {device === 'desktop' ? (
                <SimilarLargeScreen media_type={media_type} />
            ) : (
                <SimilarSmallScreen media_type={media_type} />
            )}
        </>
    );
};

Similar.propTypes = {
    media_type: propTypes.string.isRequired,
};

export default Similar;
