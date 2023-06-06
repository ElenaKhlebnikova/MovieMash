import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCastAndCrew } from "../../api";
import PersonPreview from "./person-preview";
import GoBackBtn from "../../components/go-back-btn";

function CrewAll() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["castAndCrewAll", id, "tv"],
    queryFn: fetchCastAndCrew,
  });

  return (
    <div>
      <GoBackBtn />
      <h3 className="text-2xl font-semibold my-5">Crew:</h3>
      <div className="flex flex-col">
        {data &&
          data.crew.map((person) => (
            <PersonPreview key={person.id} person={person} />
          ))}
      </div>
    </div>
  );
}

export default CrewAll;
