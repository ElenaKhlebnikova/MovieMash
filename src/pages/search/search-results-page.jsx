import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMulti } from '../../api';
import MovieItem from '../../components/movie-item';
import GoBackBtn from '../../components/go-back-btn';

const SearchResultsPage = () => {
    const { value } = useParams();

    const { data } = useQuery({
        queryKey: [value],
        queryFn: fetchMulti,
    });

    if (!data) return null;
    return (
        <>
            <GoBackBtn />
            <div className="inline-grid grid-cols-1 gap-y-28 lg:grid-cols-2 m-10">
                {data.results.map((item) => (
                    <MovieItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default SearchResultsPage;
