import { getClassNameFromGenre } from '../../../utils';
import PropTypes from 'prop-types';

const GenreSelector = ({ genreArr, onClick }) => {
    return (
        <div className="mt-16">
            <h3 className="text-left">Select genres</h3>

            <div className=" flex flex-wrap justify-start align-middle ">
                {genreArr &&
                    genreArr.map((gen) => {
                        return (
                            <button
                                onClick={() => onClick(gen.id)}
                                key={gen.id}
                                className={`mr-3 my-2 flex rounded-md px-3  ${
                                    !gen.active
                                        ? 'border border-gray-200'
                                        : 'bg-gradient-to-r ' +
                                          getClassNameFromGenre(gen.name)
                                }`}
                            >
                                {gen.name}
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};

GenreSelector.propTypes = {
    genreArr: PropTypes.arrayOf(Object),
    onClick: PropTypes.func,
};

export default GenreSelector;
