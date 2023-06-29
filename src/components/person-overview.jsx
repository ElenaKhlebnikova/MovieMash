import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPicture } from '../utils';

const PersonOverview = ({ data }) => {
    return (
        <div className=" flex-col py-10 rounded-xl mx-10 bg-gradient-to-r  from-neutral-700 to-neutral-800 bg-opacity-75">
            {data.results &&
                data.results.map((person) => {
                    return (
                        <div
                            className="flex items-center w-full pb-10  flex-col border-b-2 lg:justify-between  lg:px-10 lg:flex-row"
                            key={person.id}
                        >
                            <div className="flex flex-col m-10 lg:flex-row">
                                <Link to={`/people/${person.id}`}>
                                    <div
                                        className="flex m-10 h-56 w-40 bg-cover"
                                        style={{
                                            backgroundImage: `url(
                                            ${getPicture(
                                                person.profile_path,
                                                'person'
                                            )}
                                        )`,
                                        }}
                                    />
                                </Link>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <Link to={`/people/${person.id}`}>
                                            <h3 className="ml-5">
                                                {person.name}
                                            </h3>
                                        </Link>
                                        <h3 className="ml-5 text-base">
                                            {person.known_for_department}
                                        </h3>
                                    </div>
                                    <div className="ml-5">
                                        <span>👥</span>
                                        <p className="text-xl mr-2">
                                            {person.popularity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col lg:flex-row text-lg m-10">
                                <ul className="m-10">
                                    <span className="font-semibold">
                                        Best movies:
                                    </span>
                                    {person.known_for.map(
                                        (item) =>
                                            item.media_type === 'movie' && (
                                                <Link
                                                    key={item.id}
                                                    to={`/movie/${item.id}`}
                                                >
                                                    <li className="hover:cursor-pointer transition-all hover:text-cyan-700 mt-1">
                                                        {item.title}
                                                    </li>
                                                </Link>
                                            )
                                    )}
                                </ul>
                                <ul className="m-10 ">
                                    <span className="font-semibold">
                                        Best TV shows:
                                    </span>
                                    {person.known_for.map(
                                        (item) =>
                                            item.media_type === 'tv' && (
                                                <Link
                                                    key={item.id}
                                                    to={`/tv/${item.id}`}
                                                >
                                                    <li className="hover:cursor-pointer transition-all hover:text-cyan-700 mt-1">
                                                        {item.name}
                                                    </li>
                                                </Link>
                                            )
                                    )}
                                </ul>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

PersonOverview.propTypes = {
    data: propTypes.object.isRequired,
};
export default PersonOverview;
