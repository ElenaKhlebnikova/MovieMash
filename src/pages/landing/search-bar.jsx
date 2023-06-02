import { useState } from "react";
import { fetchMulti } from "../../api";
import { useQuery } from "@tanstack/react-query";
import SearchBarResults from "./search-bar-results";
import { Link } from "react-router-dom";

function SearchBar() {
  const [value, setValue] = useState("");
  const { data, refetch } = useQuery({
    queryKey: [value],
    queryFn: fetchMulti,
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
          <Link to={`/search/${value}`}>
            <button
              onClick={() => {
                refetch();
              }}
              className="row-start-2 h-s justify-self-center w-fit bg-gradient-to-r from-violet-500 to-fuchsia-500  text-white px-3 py-2 rounded-md hover:hover:bg-gradient-to-l"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
      {data && <SearchBarResults data={data.results} />}
    </div>
  );
}

export default SearchBar;
