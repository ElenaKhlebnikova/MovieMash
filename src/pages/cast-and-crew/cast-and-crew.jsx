import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PersonPreview from './person-page/person-preview';
import useFetchCastCrewMovieOrTv from '../../hooks/use-fetch-cast-crew-movie-or-tv';

const CastAndCrew = ({ id, media_type }) => {
    const data = useFetchCastCrewMovieOrTv(id, media_type);
    if (!data) return null;
    return (
        <div className="lg:col-start-2 lg:row-start-2">
            <h3 className="text-2xl my-5 font-semibold">Cast</h3>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:mx-5">
                {data.cast.slice(0, 5).map((person) => (
                    <PersonPreview key={person.id} person={person} />
                ))}
                <Link to={`/${media_type}/${id}/cast-and-crew/cast`}>
                    <button className="underline underline-offset-2 font-semibold text-end">
                        Show all
                    </button>
                </Link>
            </div>

            <h3 className="text-2xl my-5 font-semibold">Crew</h3>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:mx-5">
                {data.crew.slice(0, 3).map((person) => (
                    <PersonPreview key={person.id} person={person} />
                ))}
                <Link to={`/${media_type}/${id}/cast-and-crew/crew`}>
                    <button className="underline underline-offset-2 font-semibold text-end">
                        Show all
                    </button>
                </Link>
            </div>
        </div>
    );
};

CastAndCrew.propTypes = {
    id: PropTypes.string,
    media_type: PropTypes.string,
};

export default CastAndCrew;
