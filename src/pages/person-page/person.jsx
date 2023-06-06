import { useParams } from "react-router-dom";
import { fetchOnePerson } from "../../api";
import { useQuery } from "@tanstack/react-query";
import getPicture from "../../utils/get_picture";
import GoBackBtn from "../../components/go-back-btn";
import Credits from "./credits";
function Person() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["onePerson", id],
    queryFn: fetchOnePerson,
  });

  return (
    <>
      <GoBackBtn />
      {data && (
        <>
          <div className="grid grid-cols-2">
            <div>
              <img src={getPicture(data.profile_path)} />
            </div>
            <div>
              <h3 className="mb-5 font-semibold text-xl">{data.name}</h3>
              <ul className="text-start ml-5">
                <li className="m-1">🎂 {data.birthday}</li>
                {data.deathday && <li className="m-1">✝️ {data.deathday}</li>}
                <li className="m-1">🏠 {data.place_of_birth}</li>
              </ul>
            </div>
          </div>
          <div className="ml-5 text-xl mt-y">
            <p>👥</p>
            <p className="mr-2">{data.popularity}</p>
            <p className="text-justify w-full">{data.biography}</p>
          </div>
          <Credits />
        </>
      )}
    </>
  );
}

export default Person;
