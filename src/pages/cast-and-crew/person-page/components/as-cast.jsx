/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MovieItem from '../../../../components/movie-item';

const AsCast = ({ data, isLoading }) => {
    const [filteredDataCast, setFilteredDataCast] = useState([]);
    const [castIsShown, setCastIsShown] = useState(false);
    const [valueCast, setValueCast] = useState('');
    const filterFn = () => {
        // eslint-disable-next-line no-constant-condition
        if (valueCast === 'movie' || 'tv') {
            setFilteredDataCast(
                data.cast.filter((role) => role.media_type === valueCast)
            );
        }
    };

    useEffect(() => {
        !isLoading && filterFn();
    }, [valueCast, isLoading]);

    if (!data) return null;
    return (
        <>
            <div className="flex flex-col">
                <div
                    className={`h-10 w-full ${
                        castIsShown ? 'rounded-t-md' : 'rounded-md'
                    } mt-6  flex justify-between  bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:cursor-pointer`}
                    onClick={() =>
                        castIsShown
                            ? setCastIsShown(false)
                            : setCastIsShown(true)
                    }
                >
                    <div className="justify-self-start self-center ml-2 lg:ml-5">
                        Starred in:
                    </div>
                    <div className="justify-self-end self-end mr-1">
                        &#x25BC;
                    </div>
                </div>
                <div
                    className={`
         
            ${
                !castIsShown ? 'hidden' : 'auto'
            }  p-b-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-md `}
                >
                    <div className="lg:text-start lg:ml-5">
                        <select
                            data-testid="test-select-cast"
                            className="text-slate-800 rounded-md r hover:cursor-pointer mb-2"
                            onChange={(e) => {
                                setValueCast(e.target.value);
                                setFilteredDataCast([]);
                            }}
                        >
                            <option value="">All</option>
                            <option value="movie">Movies</option>
                            <option value="tv">Series</option>
                        </select>
                    </div>
                    <div className=" lg:grid lg:grid-cols-2">
                        {data &&
                            valueCast === '' &&
                            data.cast.map((role) => (
                                <div key={role.id} className="m-2">
                                    <MovieItem item={role} />
                                </div>
                            ))}
                        {data &&
                            valueCast !== '' &&
                            filteredDataCast.map((role) => (
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

AsCast.propTypes = {
    data: propTypes.object.isRequired,
    isLoading: propTypes.bool.isRequired,
};
export default AsCast;
