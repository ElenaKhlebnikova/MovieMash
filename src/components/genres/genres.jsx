import propTypes from 'prop-types';
import Genre from './genre';
import useGenres from '../../hooks/use-genres';

function Genres({ data }) {
    const genres = useGenres(data.genre_ids);

    return (
        <div className="my-10 flex flex-wrap justify-center lg:flex-col">
            {genres &&
                genres.map(
                    (gen) => gen && <Genre key={Math.random()} genre={gen[0]} />
                )}
        </div>
    );
}

Genres.propTypes = {
    data: propTypes.object.isRequired,
};
export default Genres;
