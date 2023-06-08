import Genres from './genres';
import useGenres from '../hooks/use-genres';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './rating';

function MovieItem({ item, media_type }) {
    const genres = useGenres(item.genre_ids);

    return (
        <div className=" border-violet-200 border-t-2 my-5  lg:mx-10 lg:min-w-max">
            <h3 className="font-bold text-2xl my-5">
                {item.title || item.name}
            </h3>
            <div className="grid grid-cols-2 lg:flex lg:flex-col lg:w-full lg:items-center">
                <div className="lg:mb-10">
                    <Link
                        to={`/${
                            item.media_type === undefined
                                ? media_type
                                : item.media_type
                        }/${item.id}`}
                    >
                        <img
                            className="h-52"
                            src={
                                `https://image.tmdb.org/t/p/original/` +
                                item.poster_path
                            }
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-between">
                    {item.character ||
                        (item.job && <div>{item.character || item.job}</div>)}
                    <div className="flex flex-wrap content-center">
                        {genres.map((genre) => {
                            return (
                                genre[0] && (
                                    <Genres
                                        key={genre[0].id}
                                        genre={genre[0]}
                                    />
                                )
                            );
                        })}
                    </div>

                    <Rating
                        number={item.vote_count}
                        rating={item.vote_average}
                    />
                    <div className="text-l font-semibold ">
                        <Link
                            to={`/${item.media_type ?? media_type}/${item.id}`}
                        >
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
    item: PropTypes.object.isRequired,
    media_type: PropTypes.string.isRequired,
};

export default MovieItem;
