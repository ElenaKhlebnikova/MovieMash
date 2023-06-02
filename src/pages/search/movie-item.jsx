import Genres from "../../components/genres";
import useGenres from "../../hooks/useGenres";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({ item }) {
  const genres = useGenres(item.genre_ids);

  return (
    <div className=" border-violet-200 border-t-2">
      <h3 className="font-bold text-2xl my-5">{item.title || item.name}</h3>
      <div className="grid grid-cols-2">
        <div>
          <Link to={`/${item.id}`}>
            <img
              className="h-56"
              src={`https://image.tmdb.org/t/p/original/` + item.poster_path}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap content-center">
            {genres.map((genre) => {
              return genre[0] && <Genres key={genre[0].id} genre={genre[0]} />;
            })}
          </div>
          <div className="text-xl font-semibold ">
            <Link to={`/${item.id}`}>
              <button className="underline hover:cursor-pointer hover:text-slate-300">
                Show more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  item: PropTypes.object,
};

export default MovieItem;
