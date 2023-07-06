import SearchBar from './search-bar';
import { getPicture } from '../../utils';
import BackgroundMovie from './background-movie';
import { useQuery } from '@tanstack/react-query';
import {
    fetchTrendingMovies,
    fetchTrendingSeries,
    fetchTrendingPeople,
} from '../../api';
import Header from '../../layout/header';
import Trending from './components/trending';
import Switch from './components/switch';
import { useState } from 'react';
import SwitchMoviesSeriesPeople from './components/switch-movies-series-people';

const Landing = () => {
    const [today, setToday] = useState(true);
    const [movie, setMovie] = useState(true);
    const [tv, setTv] = useState(false);
    const [people, setPeople] = useState(false);

    // use different fetch and different data instead of passing queryKey conditionally
    // so that data is not re-rendered and page doesn't reload

    const { data: todayDataMovie } = useQuery({
        queryKey: ['trendingMovie', 'day'],
        queryFn: fetchTrendingMovies,
    });

    const { data: weekDataMovie } = useQuery({
        queryKey: ['trendingMovie', 'week'],
        queryFn: fetchTrendingMovies,
    });

    const { data: todayDataSeries } = useQuery({
        queryKey: ['trendingSeries', 'day'],
        queryFn: fetchTrendingSeries,
    });

    const { data: weekDataSeries } = useQuery({
        queryKey: ['trendingSeries', 'week'],
        queryFn: fetchTrendingSeries,
    });

    const { data: todayPeopleData } = useQuery({
        queryKey: ['trendingpeople', 'day'],
        queryFn: fetchTrendingPeople,
    });

    const { data: weekPeopleData } = useQuery({
        queryKey: ['trendingpeople', 'week'],
        queryFn: fetchTrendingPeople,
    });

    const selectMovie = () => {
        setMovie(true);
        setTv(false);
        setPeople(false);
    };

    const selectTv = () => {
        setMovie(false);
        setTv(true);
        setPeople(false);
    };

    const selectPeople = () => {
        setMovie(false);
        setTv(false);
        setPeople(true);
    };

    if (!todayDataMovie) return null;

    return (
        <div>
            <div
                className="w-screen  h-screen bg-cover drop-shadow-2xl "
                style={{
                    backgroundImage: `linear-gradient(353deg, #1e1e1e 15%, rgba(95,45,117,.7) 83%),
                            
                            url(${getPicture(
                                todayDataMovie.results[0].backdrop_path
                            )})`,
                }}
            >
                <Header />
                <div className="h-5/6 grid grid-rows-3 grid-cols-1 items-end lg:justify-drop-shadow-2xlcenter lg:grid-cols-2 drop-shadow-2xl">
                    <div className="lg:col-start-2">
                        <h3 className="text-xl font-bold mx-3 lg:text-4xl ">
                            MovieMash: Where you meet your perfect movie match!
                        </h3>
                    </div>
                    <div className="self-center justify-self-center lg:row-start-2 lg:col-start-2 lg:row-span-2 lg:self-start lg:mt-20">
                        <SearchBar />
                    </div>
                    <div className="lg:row-start-3 col-start-1 mx-5 my-7">
                        <BackgroundMovie item={todayDataMovie.results[0]} />
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mt-14 ml-10 text-left">
                Trending
            </h2>

            <Switch
                switch={() => (today ? setToday(false) : setToday(true))}
                today={today}
            />
            <SwitchMoviesSeriesPeople
                props={{
                    selectMovie,
                    selectTv,
                    selectPeople,
                    tv,
                    movie,
                    people,
                }}
            />
            <Trending
                movieOrTvData={
                    today && movie
                        ? todayDataMovie
                        : !today && movie
                        ? weekDataMovie
                        : today && tv
                        ? todayDataSeries
                        : !today && tv
                        ? weekDataSeries
                        : null
                }
                today={today}
                peopleData={
                    today && people
                        ? todayPeopleData
                        : !today && people
                        ? weekPeopleData
                        : null
                }
            />
        </div>
    );
};

export default Landing;
