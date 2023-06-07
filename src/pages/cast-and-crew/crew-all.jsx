import { useParams } from 'react-router-dom';
import useFetchCastCrewMovieOrTv from '../../hooks/use-fetch-cast-crew-movie-or-tv';
import PersonPreview from './person-page/person-preview';
import GoBackBtn from '../../components/go-back-btn';
import propTypes from 'prop-types';
function CrewAll() {
    const { id } = useParams();
    const { media_type } = useParams();
    const data = useFetchCastCrewMovieOrTv(id, media_type);

    return (
        <div>
            <GoBackBtn />
            <h3 className="text-2xl font-semibold my-5">Crew:</h3>
            <div className="flex flex-col">
                {data &&
                    data.crew.map((person) => (
                        <PersonPreview key={person.id} person={person} />
                    ))}
            </div>
        </div>
    );
}

CrewAll.propTypes = {
    media: propTypes.string.isRequired,
};

export default CrewAll;
