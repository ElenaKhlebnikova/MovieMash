import PropTypes from "prop-types";
import getPicture from "../../../utils/get-picture";
import { Link } from "react-router-dom";

function PersonPreview({ person }) {
  return (
    <div className="grid grid-cols-2 mb-5 " key={person.id}>
      <div>
        <Link to={`/people/${person.id}`}>
          <img
            className="w-fit mr-3 rounded-md"
            src={getPicture(person.profile_path)}
          />
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link to={`/people/${person.id}`}>
          <h3 className="font-semibold text-xl">{person.name}</h3>
        </Link>
        {person.roles
          ? person.roles.map((role) => (
              <h3 key={role.credit_id}> {role.character} </h3>
            ))
          : person.jobs.map((job) => <h3 key={job.credit_id}> {job.job} </h3>)}
      </div>
    </div>
  );
}

PersonPreview.propTypes = {
  person: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default PersonPreview;
