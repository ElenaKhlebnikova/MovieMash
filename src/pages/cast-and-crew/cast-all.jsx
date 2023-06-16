import { useParams } from 'react-router-dom';
import useFetchCastCrewMovieOrTv from '../../hooks/use-fetch-cast-crew-movie-or-tv';
import PersonPreview from './person-page/person-preview';
import GoBackBtn from '../../components/go-back-btn';

const CastAll = () => {
    const { id } = useParams();
    const { media_type } = useParams();
    const data = useFetchCastCrewMovieOrTv(id, media_type);

    if (!data) return null;
    return (
        <div>
            <GoBackBtn />
            <h3 className="text-2xl font-semibold my-5">All roles:</h3>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:mx-10 lg:gap-10">
                {data.cast.map((person) => (
                    <PersonPreview key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
};

export default CastAll;
