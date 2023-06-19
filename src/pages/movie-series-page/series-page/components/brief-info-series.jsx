import { formatDate } from '../../../../utils';
import propTypes from 'prop-types';

const BriefInfoSeries = ({ data }) => {
    if (!data) return null;

    return (
        <div className="flex flex-col items-start gap-3">
            <p className="text-start">
                🌍
                {data.production_countries.map((coun) => (
                    <span key={coun.name}>
                        {coun.name === 'United States of America'
                            ? 'USA '
                            : coun.name === 'United Kingdom'
                            ? 'UK '
                            : coun.name}
                    </span>
                ))}
            </p>
            <p className="text-start">
                📅
                <span>
                    {formatDate(data.first_air_date) +
                        ' - ' +
                        formatDate(data.last_air_date)}
                </span>
            </p>
            <p className="text-center">
                ✍️
                {data.created_by.map((cre) => {
                    return (
                        <span key={cre.id}>
                            {cre.name}
                            <br></br>
                        </span>
                    );
                })}
            </p>
            <p>
                <span>{data.status}</span>
            </p>
        </div>
    );
};

BriefInfoSeries.propTypes = {
    data: propTypes.object.isRequired,
};
export default BriefInfoSeries;
