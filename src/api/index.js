const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjA4MTUzNjMzNzM3MTAwNzM3NzI0ZDQ2N2E5M2QzYSIsInN1YiI6IjY0NzVkMTE4ZGQyNTg5MDEyMDA1ZTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rO_E2ULkrBXLFMvl92-gnZdQHoqGWd0gmkRP4cGi9n0",
  },
};

const fetchMovies = async (value) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${value.queryKey}&include_adult=fasle&language=en-US&page=1`,
    options
  );
  return response.json();
};

const fetchGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );

  return response.json();
};

const fetchOneMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id.queryKey}?language=en-US`,
    options
  );

  return response.json();
};

export { fetchMovies, fetchGenres, fetchOneMovie };
