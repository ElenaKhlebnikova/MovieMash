import { createRequestToken, createSessionId } from '../../../api';

import { useEffect } from 'react';

const LogIn = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const request_token = queryParams.get('request_token');
    useEffect(() => {
        if (request_token) {
            const res = createSessionId(request_token);
            console.log(res);
        }
    }, [request_token]);

    const handleLogIn = (e) => {
        e.preventDefault();
        createRequestToken();
    };

    // This method is to create your own
    return (
        <div>
            <form>
                <input
                    className="text-purple-500"
                    placeholder="Enter your login"
                ></input>
                <button
                    className="h-8 w-8 bg-red-600"
                    type="submit"
                    onClick={handleLogIn}
                ></button>
            </form>
        </div>
    );
};

export default LogIn;
