import PropTypes from 'prop-types';

function RatingSelector({
    minRating,
    maxRating,
    handleMaxChange,
    handleMinChange,
}) {
    return (
        <div className="w-full mt-16">
            <h3 className="text-left">Select rating range</h3>
            <div className="relative  mt-2 mb-3 justify-self-start bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg h-2">
                <div className="grid grid-flow-col justify-stretch absolute top-0 w-full">
                    <div
                        className={`${
                            minRating > 0 ? 'bg-neutral-800 h-2' : 'h-0'
                        } `}
                    ></div>
                    <div
                        className={`${
                            minRating > 1 || maxRating < 1
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 2 || maxRating < 2
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 3 || maxRating < 3
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 4 || maxRating < 4
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        } `}
                    ></div>
                    <div
                        className={`${
                            minRating > 5 || maxRating < 5
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 6 || maxRating < 6
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 7 || maxRating < 7
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 8 || maxRating < 8
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        }`}
                    ></div>
                    <div
                        className={`${
                            minRating > 9 || maxRating < 9
                                ? 'bg-neutral-800 h-2 '
                                : 'h-0'
                        } `}
                    ></div>
                    <div
                        className={` ${
                            maxRating < 10 ? 'bg-neutral-800 h-2  ' : 'h-0'
                        }  `}
                    ></div>
                </div>
                <div className="grid grid-flow-col justify-stretch w-full pt-5">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <input
                    className="height-0"
                    id="min"
                    type="range"
                    value={minRating}
                    min={0}
                    max={10}
                    step={1}
                    onChange={handleMinChange}
                />

                <input
                    type="range"
                    value={maxRating}
                    min={0}
                    max={10}
                    step={1}
                    onChange={handleMaxChange}
                />
            </div>
        </div>
    );
}

RatingSelector.propTypes = {
    minRating: PropTypes.number,
    maxRating: PropTypes.number,
    handleMinChange: PropTypes.func,
    handleMaxChange: PropTypes.func,
};
export default RatingSelector;
