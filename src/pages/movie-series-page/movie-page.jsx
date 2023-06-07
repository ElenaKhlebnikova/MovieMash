import { useQuery } from '@tanstack/react-query';
import { fetchOneMovie } from '../../api';
import { useParams } from 'react-router-dom';
import Genres from '../../components/genres';
import Rating from '../../components/rating';
import GoBackBtn from '../../components/go-back-btn';
import formatDate from '../../utils/format-date';
import CastAndCrew from '../cast-and-crew/cast-and-crew';
import Similar from './similar/similar';

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
        <div className="flex flex-col">
            <GoBackBtn />
            {data && (
                <>
                    <div>
                        <div className="flex flex-col my-5">
                            <h3 className="text-xl">{data.title}</h3>
                            <h3 className="text-xs">{data.original_title}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <div>
                                <img
                                    className="h-fit"
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
                                        <span>{calcMoney(data.budget)}</span>
                                    </p>
                                    <p>
                                        💵
                                        <span>{calcMoney(data.revenue)}</span>
                                    </p>
                                    <p>
                                        <span>{data.status}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">{data.overview}</div>
                    <div>
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
                        <div className="my-10 flex flex-wrap justify-center">
                            {data.genres.map((gen) => (
                                <Genres key={gen.id} genre={gen} />
                            ))}
                        </div>
                        <div className=" mt-20 flex flex-col justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 rounded-md ">
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
                    </div>
                    <div>
                        <CastAndCrew id={id} media_type="movie" />
                        <h3 className="text-2xl mb-5 mt-10 font-semibold">
                            Similar
                        </h3>
                        <Similar />
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviePage;
