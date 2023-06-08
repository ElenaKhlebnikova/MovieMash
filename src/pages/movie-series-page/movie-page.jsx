import { useQuery } from '@tanstack/react-query';
import { fetchOneMovie } from '../../api';
import { useParams } from 'react-router-dom';
import Genres from '../../components/genres';
import Rating from '../../components/rating';
import GoBackBtn from '../../components/go-back-btn';
import formatDate from '../../utils/format-date';
import CastAndCrew from '../cast-and-crew/cast-and-crew';
import Similar from './similar/similar';
import SimilarLarge from './similar/similar-large-screen';

function MoviePage() {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: [id, 'movie'],
        queryFn: fetchOneMovie,
    });

    const calcMoney = (amount) => {
        if (amount > 10000000) {
            return Math.round(amount / 10000000) + 'B';
        }
        if (amount > 1000000) {
            return Math.round(amount / 1000000) + 'M';
        }
        if (amount > 1000) {
            return Math.round(amount / 1000) + 'K';
        }
        if (amount === 0) {
            return 'unknown';
        }
    };
    return (
        <>
            {' '}
            <GoBackBtn />
            <div className="flex flex-col m-10 lg:grid lg:grid-cols-2">
                {data && (
                    <>
                        <div>
                            <div className="flex flex-col my-5">
                                <h3 className="text-xl lg:text-2xl">
                                    {data.title}
                                </h3>
                                <h3 className="text-xs lg:text-lg">
                                    {data.original_title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-5 mb-5">
                                <div>
                                    <img
                                        className="lg:h-96"
                                        src={
                                            `https://image.tmdb.org/t/p/original/` +
                                            data.poster_path
                                        }
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-col items-start gap-3">
                                        <p className="text-start">
                                            🌍
                                            {data.production_countries.map(
                                                (coun) => (
                                                    <span key={coun.name}>
                                                        {coun.name ===
                                                        'United States of America'
                                                            ? 'USA'
                                                            : coun.name ===
                                                              'United Kingdom'
                                                            ? 'UK'
                                                            : coun.name}{' '}
                                                    </span>
                                                )
                                            )}
                                        </p>
                                        <p>
                                            📅{' '}
                                            <span>
                                                {formatDate(data.release_date)}
                                            </span>
                                        </p>
                                        <p>
                                            💰
                                            <span>
                                                {calcMoney(data.budget)}
                                            </span>
                                        </p>
                                        <p>
                                            💵
                                            <span>
                                                {calcMoney(data.revenue)}
                                            </span>
                                        </p>
                                        <p>
                                            <span>{data.status}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="my-5 col-span-2">
                                    {data.overview}
                                </div>
                            </div>
                            <div className="lg:col-start-1 lg:row-start-2">
                                <div className="flex items-center justify-center">
                                    {data !== undefined && (
                                        <Rating
                                            rating={data.vote_average}
                                            number={data.vote_count}
                                        />
                                    )}

                                    <div className="ml-5">
                                        <p>👥</p>
                                        <p className="text-xl mr-2">
                                            {data.popularity}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-10 flex flex-wrap justify-center">
                                {data.genres.map((gen) => (
                                    <Genres key={gen.id} genre={gen} />
                                ))}
                            </div>
                        </div>
                        <div className=" mt-20 flex flex-col justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 rounded-md lg:row-start-2 lg:col-start-1 lg:col-span-2">
                            <h3 className="text-2xl mb-5 font-semibold">
                                Production
                            </h3>
                            {data.production_companies.map((prod) => {
                                return prod.logo_path !== null ? (
                                    <img
                                        className="h-14 my-3 opacity-100"
                                        src={
                                            'https://image.tmdb.org/t/p/original/' +
                                            prod.logo_path
                                        }
                                    />
                                ) : (
                                    <p className="my-3 ">{prod.name}</p>
                                );
                            })}
                        </div>

                        <div className="lg:col-start-2 lg:row-start-1">
                            <CastAndCrew id={id} media_type="movie" />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-3">
                            <h3 className="text-2xl mb-5 mt-10 font-semibold">
                                Similar
                            </h3>

                            {/* <Similar media_type="movie" /> */}
                            <SimilarLarge media_type="movie" />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default MoviePage;
