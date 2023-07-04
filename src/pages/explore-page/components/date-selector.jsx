import { useState } from 'react';
import PropTypes from 'prop-types';

const DateSelector = ({
    releasedFrom,
    releasedTo,
    year,
    setYear,
    setReleasedFrom,
    setReleasedTo,
}) => {
    const [selectedOneYear, setSelectedOneYear] = useState('');

    return (
        <>
            <div className="mt-16 flex flex-col items-start">
                <button
                    className="border-2 mb-4 px-2 rounded-lg"
                    onClick={() => {
                        setSelectedOneYear(true);
                    }}
                >
                    Pick a release year
                </button>
                <button
                    className="border-2 px-2 rounded-lg"
                    onClick={() => {
                        setSelectedOneYear(false);
                    }}
                >
                    Pick a release time range
                </button>
            </div>

            {selectedOneYear && (
                <div className="mt-10 flex">
                    <label className="mr-3" htmlFor="year">
                        Release year:
                    </label>
                    <input
                        value={year}
                        className="text-neutral-700 rounded-lg"
                        type="number"
                        id="year"
                        min="0"
                        max="3000"
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
            )}

            {selectedOneYear === false && (
                <div className="mt-10 flex ">
                    <div className="flex flex-col mr-10">
                        <label htmlFor="released-from">Released from</label>

                        <input
                            className="rounded-lg  text-neutral-700  focus:outline-violet-500"
                            type="date"
                            id="released-from"
                            name="trip-start"
                            value={releasedFrom}
                            min={releasedFrom}
                            max={releasedTo}
                            onChange={(e) => {
                                setReleasedFrom(e.target.value);
                                setReleasedTo('');
                                setYear('');
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="released-to ">Released till</label>
                        <input
                            className="rounded-lg  text-neutral-700  focus:outline-violet-500"
                            type="date"
                            id="released-to"
                            name="trip-start"
                            value={releasedTo}
                            min={releasedFrom}
                            max="2050-12-31"
                            onChange={(e) => {
                                setReleasedTo(e.target.value);
                                setReleasedFrom('');
                                setYear('');
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

DateSelector.propTypes = {
    releasedFrom: PropTypes.instanceOf(Date),
    releasedTo: PropTypes.instanceOf(Date),
    year: PropTypes.number,
    setYear: PropTypes.func,
    setReleasedFrom: PropTypes.func,
    setReleasedTo: PropTypes.func,
};

export default DateSelector;
