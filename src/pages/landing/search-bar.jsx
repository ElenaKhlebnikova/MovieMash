import { useState } from 'react';
import { fetchMulti } from '../../api';
import { useQuery } from '@tanstack/react-query';
import SearchBarResults from './search-bar-results';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [active, setActive] = useState(false);
    const { data, refetch } = useQuery({
        queryKey: [value],
        queryFn: fetchMulti,
    });

    if (!data) return null;

    return (
        <div className="mx-3 lg:flex lg:flex-col">
            <div className="flex bg-white rounded-md h-s focus:rounded-b-none w-full">
                <input
                    className={`mb-0 text-slate-700 px-3  rounded-md  focus:outline-none ${
                        value ? 'focus:rounded-b-none' : ''
                    } lg:w-96`}
                    type="text"
                    placeholder="Search here"
                    onClick={() => setActive(true)}
                    onChange={(e) => {
                        setValue(e.target.value);
                        refetch();
                        e.target.value === '' && setActive(false);
                    }}
                    value={value}
                />
                <div>
                    <Link to={`/search/${value}`}>
                        <button
                            onClick={() => {
                                refetch();
                            }}
                            className="row-start-2 h-s justify-self-center w-fit bg-gradient-to-r from-violet-500 to-fuchsia-500  text-white px-3 py-2 rounded-md hover:hover:bg-gradient-to-l"
                        >
                            Search
                        </button>
                    </Link>
                </div>
            </div>
            <SearchBarResults data={data.results} />
        </div>
    );
};

export default SearchBar;
