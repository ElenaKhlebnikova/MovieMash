import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBarResults from "./search-bar-results";
function SearchBar() {
  const [value, setValue] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjA4MTUzNjMzNzM3MTAwNzM3NzI0ZDQ2N2E5M2QzYSIsInN1YiI6IjY0NzVkMTE4ZGQyNTg5MDEyMDA1ZTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rO_E2ULkrBXLFMvl92-gnZdQHoqGWd0gmkRP4cGi9n0",
    },
  };

  const fetchFn = async (value) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${value.queryKey}&include_adult=false&language=en-US&page=1`,
      options
    );
    return response.json();
  };

  const { data, refetch } = useQuery({
    queryKey: [value],
    queryFn: fetchFn,
  });

  return (
    <div className="">
      <div className="flex bg-white rounded-md h-s focus:rounded-b-none">
        <input
          className={
            value
              ? "mb-0 text-slate-700 px-3  rounded-md w-full focus:outline-none focus:rounded-b-none"
              : "mb-0 text-slate-700 px-3  rounded-md w-full focus:outline-none"
          }
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setValue(e.target.value);
            refetch();
          }}
          value={value}
        />
        <div>
          <button
            onClick={() => {
              refetch();
            }}
            className="row-start-2 h-s justify-self-center w-fit bg-gradient-to-r from-violet-500 to-fuchsia-500  text-white px-3 py-2 rounded-md hover:hover:bg-gradient-to-l"
          >
            Search
          </button>
        </div>
      </div>
      {data && <SearchBarResults data={data.results} />}
    </div>
  );
}

export default SearchBar;
