import { useQuery } from "@tanstack/react-query";
import { fetchOneMovie } from "../../api";
import { useParams } from "react-router-dom";
function SeriesPage() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: [id, "tv"],
    queryFn: fetchOneMovie,
  });

  console.log(data);
  return <div>{data && data.name}</div>;
}

export default SeriesPage;
