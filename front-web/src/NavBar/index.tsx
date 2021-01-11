import './styles.css';
import Logo from './logo.png'; 
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="main-navbar">
            <img src={Logo} alt="BS Deliver"/>
            <Link to="/" className="logo-text">BS Deliver</Link>
        </nav>
    )
}

export default NavBar;