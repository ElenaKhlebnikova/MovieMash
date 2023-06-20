/* eslint-disable no-constant-condition */
import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MovieItem from '../../../../components/movie-item';

const AsCrew = ({ data, isLoading }) => {
    const [crewIsShown, setCrewIsShown] = useState(false);
    const [filteredDataCrew, setFilteredDataCrew] = useState([]);
    const [valueCrew, setValueCrew] = useState('');

    const filterFn = () => {
        if (valueCrew === 'movie' || 'tv') {
            setFilteredDataCrew(
                data.crew.filter((role) => role.media_type === valueCrew)
            );
        }
    };

    useEffect(() => {
        !isLoading && filterFn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueCrew, isLoading]);

    if (!data) return null;
    return (
        <>
            <div className="flex flex-col">
                <div
                    className={`h-10 w-full ${
                        crewIsShown ? 'rounded-t-md' : 'rounded-md'
                    } mt-6  flex justify-between  bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer`}
                    onClick={() =>
                        crewIsShown
                            ? setCrewIsShown(false)
                            : setCrewIsShown(true)
                    }
                >
                    <div className="justify-self-start self-center ml-2 lg:ml-5">
                        As a part of the crew:
                    </div>
                    <div className="justify-self-end self-end mr-1">
                        &#x25BC;
                    </div>
                </div>
                <div
                    className={`${
                        !crewIsShown ? 'hidden' : 'auto'
                    }  p-b-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-md`}
                >
                    <div className="lg:text-start lg:ml-5">
                        <select
                            data-testid="test-select-crew"
                            className="text-slate-800 rounded-md mb-2"
                            onChange={(e) => {
                                setValueCrew(e.target.value);
                                setFilteredDataCrew([]);
                            }}
                        >
                            <option value="">All</option>
                            <option value="movie">Movies</option>
                            <option value="tv">Series</option>
                        </select>
                    </div>
                    <div className=" lg:grid lg:grid-cols-2">
                        {data &&
                            valueCrew === '' &&
                            data.crew.map((role) => (
                                <div key={role.id} className="m-2">
                                    <MovieItem item={role} />
                                </div>
                            ))}
                        {data &&
                            valueCrew !== '' &&
                            filteredDataCrew.map((role) => (
                                <div key={role.id} className="m-2">
                                    <MovieItem item={role} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

AsCrew.propTypes = {
    data: propTypes.object.isRequired,
    isLoading: propTypes.bool.isRequired,
};
export default AsCrew;
