import { useState } from 'react';
import { fetchMulti } from '../../api';
import { useQuery } from '@tanstack/react-query';
import SearchBarResults from './search-bar-results';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const { data, refetch } = useQuery({
        queryKey: [value],
        queryFn: fetchMulti,
        enabled: value !== '',
    });

    return (
        <div
            className="mx-3 lg:flex lg:flex-col w-11/12 absolute top-5 left-0 lg:relative"
            id="search-landing"
        >
            <div className="flex bg-white rounded-md h-s focus:rounded-b-none w-full justify-between ">
                <input
                    className={`mb-0 text-slate-700 px-3  rounded-md  focus:outline-none ${
                        value ? 'focus:rounded-b-none' : ''
                    } lg:w-96`}
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => {
                        setValue(e.target.value);
                        refetch();
                    }}
                    value={value}
                />
                <div>
                    <Link to={`/search/${value}`}>
                        <button
                            onClick={() => {
                                refetch();
                            }}
                            className="row-start-2 h-s w-fit bg-gradient-to-r from-violet-500 to-fuchsia-500  text-white px-3 py-2 rounded-md hover:hover:bg-gradient-to-l"
                        >
                            Search
                        </button>
                    </Link>
                </div>
            </div>
            {data && <SearchBarResults data={data.results.slice(0, 10)} />}
        </div>
    );
};

export default SearchBar;
