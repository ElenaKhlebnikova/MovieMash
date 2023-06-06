import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { fetchPersonCredits } from "../../api";
import { useState } from "react";
import MovieItem from "../../components/movie-item";
function Credits({ gender }) {
  const [castIsShown, setCastIsShown] = useState(false);
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["personCredits", id],
    queryFn: fetchPersonCredits,
  });

  return (
    <div>
      <div>{gender === 1 ? "Actress" : "Actor"}</div>
      <div>
        {data !== undefined &&
          data.cast.map((role) => <MovieItem key={role.id} item={role} />)}
      </div>
    </div>
  );
}
Credits.propTypes = {
  gender: PropTypes.number,
};
export default Credits;
