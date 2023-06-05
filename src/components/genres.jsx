import PropTypes from "prop-types";
import genres from "../utils/genres";
function Genres({ genre }) {
  return (
    <div
      className={
        "px-2 ml-2 mb-2 rounded-md bg-gradient-to-r" + genres(genre.name)
      }
    >
      {genre.name}
    </div>
  );
}

Genres.propTypes = {
  genre: PropTypes.object,
  name: PropTypes.string,
};

export default Genres;
