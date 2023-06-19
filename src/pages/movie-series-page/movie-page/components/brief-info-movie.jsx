import { formatDate, formatMoney } from '../../../../utils';
import propTypes from 'prop-types';

const BriefInfoMovie = ({ data }) => {
    return (
        <div>
            <div className="flex flex-col items-start gap-3">
                <p className="text-start">
                    🌍
                    {data.production_countries.map((coun) => (
                        <span key={coun.name}>
                            {coun.name === 'United States of America'
                                ? 'USA'
                                : coun.name === 'United Kingdom'
                                ? 'UK'
                                : coun.name}
                        </span>
                    ))}
                </p>

                <p>
                    💰
                    <span>{formatMoney(data.budget)}</span>
                </p>
                <p>
                    💵
                    <span>{formatMoney(data.revenue)}</span>
                </p>
                <p>
                    <span>{data.status}</span>
                </p>
                <p>
                    📅
                    <span>{formatDate(data.release_date)}</span>
                </p>
            </div>
        </div>
    );
};

BriefInfoMovie.propTypes = {
    data: propTypes.object.isRequired,
};
export default BriefInfoMovie;
