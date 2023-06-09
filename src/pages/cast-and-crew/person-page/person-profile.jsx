import { useParams } from 'react-router-dom';
import { fetchOnePerson } from '../../../api';
import { useQuery } from '@tanstack/react-query';
import GoBackBtn from '../../../components/go-back-btn';
import Credits from './credits';
import BriefInfoPerson from './components/brief-info-person';
import getScreenWidth from '../../../utils/get-screen-width';

function Person() {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: ['onePerson', id],
        queryFn: fetchOnePerson,
    });

    const device = getScreenWidth();
    return (
        <>
            <GoBackBtn />
            <div className="mx-5 lg:mx-10 ">
                {data && (
                    <>
                        <BriefInfoPerson data={data} device={device} />
                        <Credits bio={data.biography} device={device} />
                    </>
                )}
            </div>
        </>
    );
}

export default Person;
