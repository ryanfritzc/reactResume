import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ryan Fritz</h1>
            <h2>ryanfritzc@gmail.com|(919)426-8030</h2>
            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/ProjectList">Projects</Link>
            </div>
        </nav>
    );
}
export default NavBar;
