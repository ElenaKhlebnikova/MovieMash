//Hook accepts id of genre and returns a genre string
import { fetchGenres } from '../api';
import { useQuery } from '@tanstack/react-query';

// file name should be use-genres.js haha
// This hook is not doing much so you can probably remove it haha
const useGenres = (idArr) => {
  let genres = [];

  const { data } = useQuery({
    queryFn: fetchGenres,
  });

  // instead of fetching everything and then filtering the genre you want, why not fetch only the genre you want directly
  // if the ID is passed and if not you can fetch all, you can pass an ID to fetchGenres
  if (data && idArr) {
    genres = idArr.map((id) => data.genres.filter((gen) => gen.id === id));
    return genres;
  }

  return genres !== [] && genres;
};

export default useGenres;
