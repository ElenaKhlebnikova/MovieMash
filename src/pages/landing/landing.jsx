import SearchBar from './search-bar';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovies } from '../../api';
import getPicture from '../../utils/get-picture';
import BackgroundMovie from './background-movie';

function Landing() {
    const { data } = useQuery({
        queryKey: [['trendingMovie'], ['day']],
        queryFn: fetchTrendingMovies,
    });

    return (
        <div>
            {data && (
                <div
                    className="w-screen  h-screen bg-cover grid grid-rows-3 grid-cols-1 items-end lg:justify-center lg:grid-cols-2"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(2,0,36,.9) 0%, rgba(95,45,117,.7) 83%),
                            
                            url(${getPicture(data.results[0].backdrop_path)})`,
                    }}
                >
                    <div className="lg:col-start-2">
                        <h3 className="text-xl font-bold mx-3 lg:text-4xl ">
                            MovieMash: Where you meet your perfect movie match!
                        </h3>
                    </div>
                    <div className="self-center justify-self-center lg:row-start-2 lg:col-start-2 lg:row-span-2 lg:self-start lg:mt-20">
                        <SearchBar />
                    </div>
                    <div className="lg:row-start-3 col-start-1 mx-5 my-7">
                        <BackgroundMovie item={data.results[0]} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Landing;
