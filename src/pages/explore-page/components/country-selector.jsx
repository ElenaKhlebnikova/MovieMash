import PropTypes from 'prop-types';
import { countries } from '../../../utils/countries-list';

const CountrySelector = ({
    country,
    countryCode,
    setCountry,
    setCountryCode,
}) => {
    return (
        <div>
            <div className=" flex w-full  flex-col mt-16 mb-52">
                <h3 className="text-left">Select country</h3>
                <div className="min-w-full">
                    <label className="text-left" htmlFor="country" />
                    <input
                        className={`${
                            country
                                ? 'rounded-lg rounded-b-none '
                                : 'rounded-lg '
                        }  w-full text-neutral-700 px-2 mt-2 focus:outline-none focus:ring focus:border-violet-500 `}
                        type="text"
                        id="released-to"
                        name="trip-start"
                        value={country}
                        placeholder={
                            countryCode === ''
                                ? 'Enter country name'
                                : countryCode
                        }
                        onChange={(e) => {
                            setCountry(e.target.value);
                        }}
                    />
                </div>
                <div
                    className={`${
                        country
                            ? 'max-h-32 p-1 w-full rounded-b-lg  bg-white text-neutral-700   overflow-scroll'
                            : 'hidden'
                    }`}
                >
                    <ul className="">
                        {country &&
                            countries.map(
                                (coun) =>
                                    coun.name
                                        .toUpperCase()
                                        .includes(country.toUpperCase()) && (
                                        <li
                                            className="cursor-pointer w-full hover:bg-slate-300 "
                                            onClick={() => {
                                                setCountryCode(coun.code);
                                                setCountry('');
                                            }}
                                            key={coun.code}
                                        >
                                            {coun.name}
                                        </li>
                                    )
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

CountrySelector.propTypes = {
    country: PropTypes.string,
    countryCode: PropTypes.string,
    setCountry: PropTypes.func,
    setCountryCode: PropTypes.func,
};
export default CountrySelector;
