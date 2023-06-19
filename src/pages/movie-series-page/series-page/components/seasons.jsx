import { formatDate } from '../../../../utils';
import propTypes from 'prop-types';

const Seasons = ({ data }) => {
    if (!data.seasons) return null;
    return (
        <div className="flex flex-col my-10 lg:row-start-4 lg:col-span-2">
            <h3 className="text-2xl my-5 font-semibold">Seasons:</h3>
            <table className="table-fixed border-separate  border-spacing-5 min-w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Episode count</th>
                    </tr>
                </thead>
                {data.seasons.map((season) => {
                    return (
                        <tr key={season.id}>
                            <td className=" border-violet-400 border-b-2  p-2">
                                {season.name}
                            </td>
                            <td className=" border-violet-400 border-b-2  p-2">
                                {formatDate(season.air_date)}
                            </td>
                            <td className="max-w-min border-violet-400 border-b-2  p-2">
                                {season.episode_count}
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

Seasons.propTypes = {
    data: propTypes.object.isRequired,
};

export default Seasons;
