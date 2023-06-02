import { useParams } from "react-router-dom";
import MoviePage from "./movie-page";
import SeriesPage from "./series-page";

function MiddlePage() {
  const { media_type } = useParams();
  return <div>{media_type === "tv" ? <SeriesPage /> : <MoviePage />}</div>;
}

export default MiddlePage;
