import GenreSelector from './genre-selector';
import RatingSelector from './rating-selector';
import DateSelector from './date-selector';
import CountrySelector from './country-selector';
import SortingSelector from './sorting-selector';
import PropTypes from 'prop-types';

const Filter = ({ props }) => {
    //Functions to handle genres

    const handleClick = (id) => {
        const newArr = props.genreArr.map((gen) => {
            if (gen.id === id) {
                return { ...gen, active: !gen.active };
            }

            return gen;
        });

        props.setGenreArr(newArr);
    };

    //Functions to handle rating
    const handleMinChange = (event) => {
        event.preventDefault();
        const value = parseFloat(event.target.value);
        const newMinRating = Math.min(value, props.maxRating - 1);
        props.setMinRating(newMinRating);
    };

    const handleMaxChange = (event) => {
        event.preventDefault();
        const value = parseFloat(event.target.value);
        const newMaxRating = Math.max(value, props.minRating + 1);
        props.setMaxRating(newMaxRating);
    };

    return (
        <div>
            {' '}
            <div className="flex  flex-col items-start ml-10 mt-20">
                <SortingSelector setSorting={props.setSorting} />
                <GenreSelector
                    onClick={handleClick}
                    genreArr={props.genreArr}
                />
                <RatingSelector
                    maxRating={props.maxRating}
                    minRating={props.minRating}
                    handleMaxChange={handleMaxChange}
                    handleMinChange={handleMinChange}
                />

                <DateSelector
                    releasedFrom={props.releasedFrom}
                    releasedTo={props.releasedTo}
                    year={props.year}
                    setYear={props.setYear}
                    setReleasedFrom={props.setReleasedFrom}
                    setReleasedTo={props.setReleasedTo}
                />
                <CountrySelector
                    country={props.country}
                    countryCode={props.countryCode}
                    setCountry={props.setCountry}
                    setCountryCode={props.setCountryCode}
                />
            </div>
        </div>
    );
};

Filter.propTypes = {
    props: PropTypes.object,
    genreArr: PropTypes.array,
    releasedFrom: PropTypes.instanceOf(Date),
    releasedTo: PropTypes.instanceOf(Date),
    year: PropTypes.number,
    setReleasedFrom: PropTypes.func,
    setReleasedTo: PropTypes.func,
    setYear: PropTypes.func,
    country: PropTypes.string,
    countryCode: PropTypes.string,
    setCountry: PropTypes.func,
    setCountryCode: PropTypes.func,
    setGenreArr: PropTypes.func,
    maxRating: PropTypes.number,
    minRating: PropTypes.number,
    setMaxRating: PropTypes.func,
    setMinRating: PropTypes.func,
    setSorting: PropTypes.func,
    setEnabled: PropTypes.func,
};

export default Filter;
