/* eslint-disable no-constant-condition */
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { fetchPersonCredits } from "../../../api";
import { useEffect, useState } from "react";
import MovieItem from "../../../components/movie-item";
function Credits({ bio }) {
  const [bioIsShown, setBioIsShown] = useState(false);
  const [castIsShown, setCastIsShown] = useState(false);
  const [crewIsShown, setCrewIsShown] = useState(false);
  const [filteredDataCast, setFilteredDataCast] = useState([]);
  const [filteredDataCrew, setFilteredDataCrew] = useState([]);
  const [valueCast, setValueCast] = useState("");
  const [valueCrew, setValueCrew] = useState("");
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["personCredits", id],
    queryFn: fetchPersonCredits,
  });

  const filterFn = () => {
    if (valueCast === "movie" || "tv") {
      setFilteredDataCast(
        data.cast.filter((role) => role.media_type === valueCast)
      );
    }
    if (valueCrew === "movie" || "tv") {
      setFilteredDataCrew(
        data.crew.filter((role) => role.media_type === valueCrew)
      );
    }
  };

  useEffect(() => {
    !isLoading && filterFn();
  }, [valueCast, valueCrew, isLoading]);

  return (
    <div>
      <div className="flex flex-col">
        <div
          className={`h-10 min-w-full ${
            bioIsShown ? "rounded-t-md" : "rounded-md"
          } mt-6 flex justify-between  bg-gradient-to-r from-purple-500 to-teal-500 hover:cursor-pointer`}
          onClick={() =>
            bioIsShown ? setBioIsShown(false) : setBioIsShown(true)
          }
        >
          <div className="justify-self-start self-center ml-2">Biography</div>
          <div className="justify-self-end self-end mr-1">&#x25BC;</div>
        </div>
        <div
          className={`${
            !bioIsShown ? "hidden" : "auto"
          } bg-gradient-to-r from-purple-500 to-teal-500 rounded-b-md p-b-3 text-justify`}
        >
          <p className="m-3">{bio}</p>
        </div>
      </div>
      {data && data.cast && (
        <div className="flex flex-col">
          <div
            className={`h-10 w-full ${
              castIsShown ? "rounded-t-md" : "rounded-md"
            } mt-6  flex justify-between  bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:cursor-pointer`}
            onClick={() =>
              castIsShown ? setCastIsShown(false) : setCastIsShown(true)
            }
          >
            <div className="justify-self-start self-center ml-2">
              Starred in:
            </div>
            <div className="justify-self-end self-end mr-1">&#x25BC;</div>
          </div>
          <div
            className={`
         
            ${
              !castIsShown ? "hidden" : "auto"
            }  p-b-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-md  `}
          >
            <div>
              <select
                className="text-slate-800 rounded-md r hover:cursor-pointer"
                onChange={(e) => {
                  setValueCast(e.target.value);
                  setFilteredDataCast([]);
                }}
              >
                <option value="">All</option>
                <option value="movie">Movies</option>
                <option value="tv">Series</option>
              </select>
            </div>

            {data &&
              valueCast === "" &&
              data.cast.map((role) => (
                <div key={role.id} className="m-2">
                  <MovieItem item={role} />
                </div>
              ))}
            {data &&
              valueCast !== "" &&
              filteredDataCast.map((role) => (
                <div key={role.id} className="m-2">
                  <MovieItem item={role} />
                </div>
              ))}
          </div>
        </div>
      )}
      {data && data.cast && (
        <div className="flex flex-col">
          <div
            className={`h-10 w-full ${
              crewIsShown ? "rounded-t-md" : "rounded-md"
            } mt-6  flex justify-between  bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer`}
            onClick={() =>
              crewIsShown ? setCrewIsShown(false) : setCrewIsShown(true)
            }
          >
            <div className="justify-self-start self-center ml-2">
              As a part of the crew:
            </div>
            <div className="justify-self-end self-end mr-1">&#x25BC;</div>
          </div>
          <div
            className={`${
              !crewIsShown ? "hidden" : "auto"
            }  p-b-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-md`}
          >
            <div>
              <select
                className="text-slate-800 rounded-md "
                onChange={(e) => {
                  setValueCrew(e.target.value);
                  setFilteredDataCrew([]);
                }}
              >
                <option value="">All</option>
                <option value="movie">Movies</option>
                <option value="tv">Series</option>
              </select>
            </div>
            {data &&
              valueCrew === "" &&
              data.crew.map((role) => (
                <div key={role.id} className="m-2">
                  <MovieItem item={role} />
                </div>
              ))}
            {data &&
              valueCrew !== "" &&
              filteredDataCrew.map((role) => (
                <div key={role.id} className="m-2">
                  <MovieItem item={role} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
Credits.propTypes = {
  bio: PropTypes.string,
};

export default Credits;
