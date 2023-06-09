import { useParams } from 'react-router-dom';
import { fetchOnePerson } from '../../../api';
import { useQuery } from '@tanstack/react-query';
import getPicture from '../../../utils/get-picture';
import GoBackBtn from '../../../components/go-back-btn';
import formatDate from '../../../utils/format-date';
import Credits from './credits';
function Person() {
    const { id } = useParams();

    const { data } = useQuery({
        queryKey: ['onePerson', id],
        queryFn: fetchOnePerson,
    });

    return (
        <>
            <GoBackBtn />
            <div className="mx-5 lg:mx-10 ">
                {data && (
                    <>
                        <div className="grid grid-cols-2 lg:place-content-center ">
                            <div>
                                <img
                                    className="lg:h-64"
                                    src={getPicture(data.profile_path)}
                                />
                            </div>
                            <div>
                                <h3 className="mb-5 font-semibold text-xl">
                                    {data.name}
                                </h3>
                                <ul className="text-start ml-5">
                                    <li className="m-1">
                                        🎂 {formatDate(data.birthday)}
                                    </li>
                                    {data.deathday && (
                                        <li className="m-1">
                                            ✝️ {formatDate(data.deathday)}
                                        </li>
                                    )}
                                    <li className="m-1">
                                        🏠 {data.place_of_birth}
                                    </li>

                                    <li className="m-1">
                                        <p>👥 {data.popularity}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Credits bio={data.biography} />
                    </>
                )}
            </div>
        </>
    );
}

export default Person;
