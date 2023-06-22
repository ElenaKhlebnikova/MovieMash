import PropTypes from 'prop-types';
import Genre from './genre';
import useGenres from '../../hooks/use-genres';

const Genres = ({ data, media_type }) => {
    const genres = useGenres(
        data.genres ?? data.genre_ids,
        media_type ?? data.media_type
    );

    return (
        <div className="my-10 flex flex-col flex-wrap justify-center">
            {genres.map((gen) => {
                return (
                    <div key={Math.random()}>
                        <Genre key={Math.random()} genre={gen} />
                    </div>
                );
            })}
        </div>
    );
};

Genres.propTypes = {
    data: PropTypes.shape({
        media_type: PropTypes.string,
        genre_ids: PropTypes.array,
        genres: PropTypes.array,
    }),
    media_type: PropTypes.string,
};
export default Genres;
