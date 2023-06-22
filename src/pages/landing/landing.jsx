import SearchBar from './search-bar';
import { getPicture } from '../../utils';
import BackgroundMovie from './background-movie';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovies } from '../../api';
import Header from '../../layout/header';
import Trending from './components/trending-movies';
import Switch from './components/switch';
import { useState } from 'react';

const Landing = () => {
    const [today, setToday] = useState(true);
    const { data: todayData } = useQuery({
        queryKey: ['trendingMovie', 'day'],
        queryFn: fetchTrendingMovies,
    });

    const { data: weekData } = useQuery({
        queryKey: ['trendingMovie', 'week'],
        queryFn: fetchTrendingMovies,
    });

    if (!todayData) return null;

    return (
        <div>
            <div
                className="w-screen  h-screen bg-cover drop-shadow-2xl "
                style={{
                    backgroundImage: `linear-gradient(353deg, #1e1e1e 15%, rgba(95,45,117,.7) 83%),
                            
                            url(${getPicture(
                                todayData.results[0].backdrop_path
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
                        <BackgroundMovie item={todayData.results[0]} />
                    </div>
                </div>
            </div>

            <Switch
                switch={() => (today ? setToday(false) : setToday(true))}
                today={today}
            />
            <Trending items={today ? todayData : weekData} today={today} />
        </div>
    );
};

export default Landing;
