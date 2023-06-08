import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function SearchBarResults({ data }) {
    return (
        <div className="w-full bg-white rounded-b-md mt-0  text-slate-700 lg:w-96 lg:overflow-y-scroll lg:overflow-x-hidden">
            {data.map((item) => (
                <Link key={item.id} to={`/${item.media_type}/${item.id}`}>
                    <div className="px-3 hover:bg-slate-200 text-start hover:cursor-pointer">
                        {item.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}

SearchBarResults.propTypes = {
    data: PropTypes.array,
};

export default SearchBarResults;
