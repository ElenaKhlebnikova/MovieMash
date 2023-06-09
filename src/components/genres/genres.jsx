import propTypes from 'prop-types';
import Genre from './genre';
function Genres({ data }) {
    return (
        <div className="my-10 flex flex-wrap justify-center">
            {data.genres.map((gen) => (
                <Genre key={gen.id} genre={gen} />
            ))}
        </div>
    );
}

Genres.propTypes = {
    data: propTypes.object.isRequired,
};
export default Genres;
