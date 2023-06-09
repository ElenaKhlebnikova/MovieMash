import { useState } from 'react';
import propTypes from 'prop-types';

function Biography({ bio }) {
    const [bioIsShown, setBioIsShown] = useState(false);
    return (
        <div>
            <div className="flex flex-col">
                <div
                    className={`h-10 min-w-full ${
                        bioIsShown ? 'rounded-t-md' : 'rounded-md'
                    } mt-6 flex justify-between  bg-gradient-to-r from-purple-500 to-teal-500 hover:cursor-pointer`}
                    onClick={() =>
                        bioIsShown ? setBioIsShown(false) : setBioIsShown(true)
                    }
                >
                    <div className="justify-self-start self-center ml-2">
                        Biography
                    </div>
                    <div className="justify-self-end self-end mr-1">
                        &#x25BC;
                    </div>
                </div>
                <div
                    className={`${
                        !bioIsShown ? 'hidden' : 'auto'
                    } bg-gradient-to-r from-purple-500 to-teal-500 rounded-b-md p-b-3 text-justify`}
                >
                    <p className="m-3">{bio}</p>
                </div>
            </div>
        </div>
    );
}

Biography.propTypes = {
    bio: propTypes.string.isRequired,
};

export default Biography;
