import { useQuery } from "@tanstack/react-query";
import { fetchCastAndCrew } from "../../api";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PersonPreview from "./person-page/person-preview";

function CastAndCrew({ id, media }) {
  const { data } = useQuery({
    queryKey: ["castAndCrew", id, media],
    queryFn: fetchCastAndCrew,
  });

  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-2xl my-5 font-semibold">Cast</h3>
        {data !== undefined &&
          data.cast
            .slice(0, 5)
            .map((person) => <PersonPreview key={person.id} person={person} />)}
        <Link to={`/tv/${id}/cast-and-crew/cast`}>
          <button className="underline underline-offset-2 font-semibold text-end">
            Show all
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl my-5 font-semibold">Crew</h3>
        {data !== undefined &&
          data.crew
            .slice(0, 3)
            .map((person) => <PersonPreview key={person.id} person={person} />)}
        <Link to={`/tv/${id}/cast-and-crew/crew`}>
          <button className="underline underline-offset-2 font-semibold text-end">
            Show all
          </button>
        </Link>
      </div>
    </>
  );
}

CastAndCrew.propTypes = {
  id: PropTypes.string,
  media: PropTypes.string,
  isFetching: PropTypes.bool,
};

export default CastAndCrew;
