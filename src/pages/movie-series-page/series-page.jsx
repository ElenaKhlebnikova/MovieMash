import { useQuery } from '@tanstack/react-query';
import { fetchOneMovie } from '../../api';
import { useParams } from 'react-router-dom';
import Rating from '../../components/rating';
import Genres from '../../components/genres';
import CastAndCrew from '../cast-and-crew/cast-and-crew';
import GoBackBtn from '../../components/go-back-btn';
import formatDate from '../../utils/format-date';

function SeriesPage() {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: [id, 'tv'],
        queryFn: fetchOneMovie,
    });

    return (
        <div>
            <GoBackBtn />
            {data && (
                <>
                    <div>
                        <div className="flex flex-col my-5">
                            <h3 className="text-xl">{data.name}</h3>
                            <h3 className="text-xs">{data.original_name}</h3>
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
                                        {data &&
                                            data.production_countries !==
                                                undefined &&
                                            data.production_countries.map(
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
                                    <p className="text-start">
                                        📅
                                        <span>
                                            {formatDate(data.first_air_date) +
                                                '-' +
                                                formatDate(data.last_air_date)}
                                        </span>
                                    </p>
                                    <p className="text-start">
                                        ✍️{' '}
                                        {data.created_by &&
                                            data.created_by.map((cre) => {
                                                return (
                                                    <span key={cre.id}>
                                                        {cre.name}
                                                    </span>
                                                );
                                            })}
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
                            <Rating
                                rating={data.vote_average}
                                number={data.vote_count}
                            />
                            <div className="ml-5">
                                <p>👥</p>
                                <p className="text-xl mr-2">
                                    {data.popularity}
                                </p>
                            </div>
                        </div>

                        <div className="my-10 flex flex-wrap justify-center">
                            {data.genres &&
                                data.genres.map((gen) => (
                                    <Genres key={gen.id} genre={gen} />
                                ))}
                        </div>

                        <div className=" mt-20 flex flex-col justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 rounded-md ">
                            <h3 className="text-2xl mb-5 font-semibold">
                                Production
                            </h3>
                            {data.production_companies &&
                                data.production_companies.map((prod) => {
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
                        <div className="flex flex-col my-10">
                            <h3 className="text-2xl my-5 font-semibold">
                                Seasons:
                            </h3>
                            <table className="table-fixed border-separate  border-spacing-5 min-w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Episode count</th>
                                    </tr>
                                </thead>
                                {data.seasons &&
                                    data.seasons.map((season) => {
                                        return (
                                            <tr key={season.id}>
                                                <td className=" border-violet-400 border-b-2  p-2">
                                                    {season.name}
                                                </td>
                                                <td className=" border-violet-400 border-b-2  p-2">
                                                    {formatDate(
                                                        season.air_date
                                                    )}
                                                </td>
                                                <td className="max-w-min border-violet-400 border-b-2  p-2">
                                                    {season.episode_count}
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </table>
                        </div>
                        <div>
                            <CastAndCrew id={id} media="tv" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SeriesPage;
