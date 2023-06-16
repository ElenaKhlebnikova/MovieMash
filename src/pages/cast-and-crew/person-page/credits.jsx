/* eslint-disable no-constant-condition */
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { fetchPersonCredits } from '../../../api';
import Biography from './components/biography';
import AsCast from './components/as-cast';
import AsCrew from './components/as-crew';

const Credits = ({ bio, device }) => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['personCredits', id],
        queryFn: fetchPersonCredits,
    });

    if (!data) return null;
    return (
        <>
            {device === 'mobile' && <Biography bio={bio} />}
            <AsCast data={data} isLoading={isLoading} />
            <AsCrew data={data} isLoading={isLoading} />
        </>
    );
};
Credits.propTypes = {
    bio: PropTypes.string,
    device: PropTypes.string.isRequired,
};

export default Credits;
