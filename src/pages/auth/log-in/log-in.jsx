import { createRequestToken } from '../../../api';

const LogIn = () => {
    const handleLogIn = (e) => {
        e.preventDefault();
        createRequestToken();
    };

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
