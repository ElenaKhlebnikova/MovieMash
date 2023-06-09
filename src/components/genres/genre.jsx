import PropTypes from 'prop-types';
// example of how utils/index.js can be useful when importing
import { getClassNameFromGenre } from '../../utils';

// I rewrote the component to use arrow function and also changed some things
// I think this is a bit cleaner but of course that's a style preference and not necessarily
// the standard way xD if you like this you can do the same for other components
const Genre = ({ genre }) => {
    if (!genre) return null;

    const className = `px-2 ml-2 mb-2 rounded-md bg-gradient-to-r ${getClassNameFromGenre(
        genre.name
    )}`;

    return <div className={className}>{genre.name}</div>;
};

Genre.propTypes = {
    genre: PropTypes.object,
    name: PropTypes.string,
};

export default Genre;
