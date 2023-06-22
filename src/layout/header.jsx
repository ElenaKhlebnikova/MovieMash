import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="w-screen p-5">
            <img className="h-14 lg:h-16" src={logo} />
        </div>
    );
};

export default Header;
