import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMulti } from '../../api';
import MovieItem from '../../components/movie-item';
import GoBackBtn from '../../components/go-back-btn';
function SearchResultsPage() {
    const { value } = useParams();

    const { data } = useQuery({
        queryKey: [value],
        queryFn: fetchMulti,
    });

    return (
        <>
            <GoBackBtn />
            <div className="grid grid-cols-1 gap-y-28 lg:grid-cols-2 ">
                {data &&
                    data.results.map((item) => (
                        <MovieItem key={item.id} item={item} />
                    ))}
            </div>
        </>
    );
}

export default SearchResultsPage;
