import './styles.css';
import Logo from './logo.png'; 

function NavBar(){
    return (
        <nav className="main-navbar">
            <img src={Logo} alt="BS Deliver"/>
            <a href="home" className="logo-text">BS Deliver</a>
        </nav>
    )
}

export default NavBar;