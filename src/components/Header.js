//Resources
import logo from '../images/logo.png';
//Styles
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img className='header_logo' src={logo} alt="Rick and Morty's logo" title="Rick and Morty's logo"/>
        </header>
)};
export default Header;