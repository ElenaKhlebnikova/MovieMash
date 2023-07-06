import PropTypes from 'prop-types';
import { getPicture } from '../../../utils';
import { Link } from 'react-router-dom';

const PersonPreview = ({ person }) => {
    return (
        <div
            className="grid grid-cols-2 mb-5 lg:mx-3  lg:justify-items-start"
            key={person.id}
        >
            <div
                className="lg:justify-self-end lg:mr-5 bg-no-repeat bg-contain w-36  mr-3 rounded-md"
                style={{
                    backgroundImage: `url(${getPicture(
                        person.profile_path,
                        'person'
                    )})`,
                }}
            >
                <Link to={`/people/${person.id}`}>
                    <img
                        className=""
                        src={getPicture(person.profile_path, 'person')}
                    />
                </Link>
            </div>
            <div className="flex flex-col text-center">
                <Link to={`/people/${person.id}`}>
                    <h3 className="font-semibold text-xl">{person.name}</h3>
                </Link>
                {person.roles &&
                    person.roles.map((role) => (
                        <h3 key={role.credit_id}> {role.character} </h3>
                    ))}

                {person.character && (
                    <h3 key={person.character}> {person.character} </h3>
                )}
                {person.jobs &&
                    person.jobs.map((job) => (
                        <h3 key={job.credit_id}> {job.job} </h3>
                    ))}
                {person.job && <h3> {person.job} </h3>}
            </div>
        </div>
    );
};

PersonPreview.propTypes = {
    person: PropTypes.object,
    id: PropTypes.string,
    name: PropTypes.string,
};

export default PersonPreview;
