import PropTypes from 'prop-types';
import { getClassNameFromGenre } from '../../utils';

const Genre = ({ genre }) => {
    if (!genre) return null;
    return (
        <div
            className={
                'text-sm font-medium px-2 ml-2 mb-2 rounded-md bg-gradient-to-r' +
                getClassNameFromGenre(genre.name)
            }
        >
            {genre.name}
        </div>
    );
};

Genre.propTypes = {
    genre: PropTypes.object,
    name: PropTypes.string,
};

export default Genre;
