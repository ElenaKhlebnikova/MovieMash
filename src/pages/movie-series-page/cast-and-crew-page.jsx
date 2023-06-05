import { useParams } from "react-router-dom";
import { fetchCastAndCrew } from "../../api";
import { useQuery } from "@tanstack/react-query";

function CastAndCrewPage() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [id, "tv"],
    queryFn: fetchCastAndCrew,
  });
  console.log(data);
  return <div>CastAndCrewPage</div>;
}

export default CastAndCrewPage;
