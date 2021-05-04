import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ryan Fritz</h1>
            <p>ryanfritzc@gmail.com</p>
            <p>(919)426-8030</p>
            <div className="navLinks">
                <Link to= "/reactResume/">Home</Link>
                <Link to= "/Projects">Projects</Link>
            </div>
        </nav>
    );
}
export default NavBar;
