import PropTypes from 'prop-types';

const SortingSelector = ({ setSorting }) => {
    const options = [
        { name: 'Rating \u2191', value: 'vote_average.asc' },
        { name: 'Rating \u2193', value: 'vote_average.desc' },
        { name: 'Release \u2191', value: 'primary_release_date.asc' },
        { name: 'Release \u2193', value: 'primary_release_date.desc' },
    ];

    return (
        <div className="mt-16 ">
            <h3 className="text-left">Sort by:</h3>
            <label htmlFor="sort" />

            <select
                onChange={(e) => setSorting(e.target.value)}
                name="sort"
                className="text-neutral-700 rounded-lg mt-2 cursor-pointer"
            >
                <option value="">No sorting</option>
                {options.map((opt) => (
                    <option className="" key={opt.value} value={opt.value}>
                        {opt.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

SortingSelector.propTypes = {
    setSorting: PropTypes.func,
};

export default SortingSelector;
