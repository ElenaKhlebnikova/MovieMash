//Hook accepts id of genre and returns a genre string
import { fetchGenres } from "../api";
import { useQuery } from "@tanstack/react-query";

const useGenres = (idArr) => {
  let genres = [];

  const { data } = useQuery({
    queryFn: fetchGenres,
  });

  if (data && idArr) {
    genres = idArr.map((id) => data.genres.filter((gen) => gen.id === id));
    return genres;
  }

  return genres !== [] && genres;
};

export default useGenres;
