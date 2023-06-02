import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMulti } from "../../api";
import MovieItem from "./movie-item";
function SearchResultsPage() {
  const { value } = useParams();

  const { data } = useQuery({
    queryKey: [value],
    queryFn: fetchMulti,
  });

  return (
    <div className="grid grid-cols-1 gap-y-28 ">
      {data &&
        data.results.map((item) => <MovieItem key={item.id} item={item} />)}
    </div>
  );
}

export default SearchResultsPage;
