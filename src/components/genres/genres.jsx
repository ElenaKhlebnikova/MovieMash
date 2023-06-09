import propTypes from 'prop-types';
import Genre from './genre';
import useGenres from '../../hooks/use-genres';

// use arrow functions for everything, utils and components and everything
function Genres({ data }) {
    const genres = useGenres(data.genre_ids);

    // use this method of returning null early in all other components where you have one condition only
    if (!genres) return null;

    return (
        <div className="my-10 flex flex-wrap justify-center lg:flex-col">
            {genres.map(
                (gen) => gen && <Genre key={Math.random()} genre={gen[0]} />
            )}
        </div>
    );
}

Genres.propTypes = {
    data: propTypes.object.isRequired,
};
export default Genres;
