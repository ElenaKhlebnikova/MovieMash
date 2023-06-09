import { useQuery } from '@tanstack/react-query';
import { fetchOneMovie } from '../../../api';
import { useParams } from 'react-router-dom';
import CastAndCrew from '../../cast-and-crew/cast-and-crew';
import GoBackBtn from '../../../components/go-back-btn';
import Similar from '../similar/similar';
import MainContaier from '../../../components/main-container';
import MainInfoContainer from '../../../components/main-info-container';
import Title from '../../../components/title';
import Seasons from './components/seasons';
import Production from './../../../components/production';

function SeriesPage() {
    const { id } = useParams();

    // rename function to fetchOne because you use it to fetch one movie and one serie
    const { data } = useQuery({
        queryKey: [id, 'tv'],
        queryFn: fetchOneMovie,
    });

    return (
        <div>
            <GoBackBtn />

            <MainContaier>
                {data && (
                    <>
                        <Title
                            title={data.name}
                            original_title={data.original_name}
                        />
                        <MainInfoContainer data={data} />
                        <Production data={data} />
                        <Seasons data={data} />
                        <CastAndCrew id={id} media_type="tv" />
                        <Similar media_type="tv" />
                    </>
                )}
            </MainContaier>
        </div>
    );
}

export default SeriesPage;
