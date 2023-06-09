import formatDate from '../../../../utils/format-date';
import propTypes from 'prop-types';

function BriefInfoSeries({ data }) {
    return (
        <div className="flex flex-col items-start gap-3">
            <p className="text-start">
                🌍
                {data &&
                    data.production_countries !== undefined &&
                    data.production_countries.map((coun) => (
                        <span key={coun.name}>
                            {coun.name === 'United States of America'
                                ? 'USA'
                                : coun.name === 'United Kingdom'
                                ? 'UK'
                                : coun.name}{' '}
                        </span>
                    ))}
            </p>
            <p className="text-start">
                📅
                <span>
                    {formatDate(data.first_air_date) +
                        '-' +
                        formatDate(data.last_air_date)}
                </span>
            </p>
            <p className="text-start">
                ✍️{' '}
                {data.created_by &&
                    data.created_by.map((cre) => {
                        return <span key={cre.id}>{cre.name}</span>;
                    })}
            </p>
            <p>
                <span>{data.status}</span>
            </p>
        </div>
    );
}

BriefInfoSeries.propTypes = {
    data: propTypes.object.isRequired,
};
export default BriefInfoSeries;
