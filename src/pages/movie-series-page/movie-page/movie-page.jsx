import { useQuery } from '@tanstack/react-query';
import { fetchOneMovieOrSeries } from '../../../api';
import { useParams } from 'react-router-dom';
import GoBackBtn from '../../../components/go-back-btn';
import CastAndCrew from '../../cast-and-crew/cast-and-crew';
import Title from '../../../components/title';
import Production from '../../../components/production';
import MainContaier from '../../../components/main-container';
import MainInfoContainer from '../../../components/main-info-container';
import Similar from '../similar/similar';

const MoviePage = () => {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: [id, 'movie'],
        queryFn: fetchOneMovieOrSeries,
    });

    if (!data) return null;
    return (
        <>
            <GoBackBtn />
            <MainContaier>
                <>
                    <Title
                        title={data.title}
                        original_title={data.original_title}
                    />
                    <MainInfoContainer
                        img={data.poster_path}
                        data={data}
                        media_type={'movie'}
                    />
                    <Production data={data} />
                    <CastAndCrew id={id} media_type="movie" />
                    <Similar media_type="movie" />
                </>
            </MainContaier>
        </>
    );
};

export default MoviePage;
