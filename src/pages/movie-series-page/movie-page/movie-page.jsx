import { useQuery } from '@tanstack/react-query';
import { fetchOneMovie } from '../../../api';
import { useParams } from 'react-router-dom';
import GoBackBtn from '../../../components/go-back-btn';
import CastAndCrew from '../../cast-and-crew/cast-and-crew';
import Title from '../../../components/title';
import Production from '../../../components/production';
import MainContaier from '../../../components/main-container';
import MainInfoContainer from '../../../components/main-info-container';
import Similar from '../similar/similar';

function MoviePage() {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: [id, 'movie'],
        queryFn: fetchOneMovie,
    });

    return (
        <>
            <GoBackBtn />
            <MainContaier>
                {data && (
                    <>
                        <Title data={data} />
                        <MainInfoContainer
                            img={data.poster_path}
                            data={data}
                            media_type={'movie'}
                        />
                        <Production data={data} />
                        <CastAndCrew id={id} media_type="movie" />
                        <Similar media_type="movie" />
                    </>
                )}
            </MainContaier>
        </>
    );
}

export default MoviePage;
