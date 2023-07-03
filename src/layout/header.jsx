import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="w-screen p-5 flex justify-between">
            <img className="h-14 lg:h-16" src={logo} />
            <ul className="flex mr-10 ">
                <Link to={'/explore-movies'}>
                    <li className="mx-2 text-base font-semibold hover:cursor-pointer hover:text-slate-300 transition-all">
                        Explore movies
                    </li>
                </Link>
                <li className="mx-2 text-base font-semibold hover:cursor-pointer hover:text-slate-300 transition-all">
                    Explore TV shows
                </li>
            </ul>
        </nav>
    );
};

export default Header;
