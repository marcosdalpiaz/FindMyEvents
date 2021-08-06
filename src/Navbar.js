import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Find My Events</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"  style={{
                    color: "white",
                    backgroundColor: '#F1356d',
                    borderRadius: '8px'
                }}>New Event</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;