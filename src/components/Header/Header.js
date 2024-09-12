import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Header = ({
    isAuthenticated,
    username,
}) => {
    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }

        auth.currentUser.getIdToken(true)
            .then((idToken) => {
                console.log("Fetched ID Token:", idToken); // Verify that the token is fetched
                return fetch('http://localhost:5001', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${idToken}`, // Correctly formatted Authorization header
                        'Content-Type': 'application/json'
                    }
                });
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Fetched data:", data); // Log the server response
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log any errors
            });
    }, [isAuthenticated]);

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/">Dashboard</Link>
                        <Link className="button" to="#">My Pets</Link>
                        <Link className="button" to="/pets/create">Add Pet</Link>
                    </div>
                    <div className="second-bar">
                        <ul>
                            {isAuthenticated
                                ? <li>Welcome, {username}!</li>
                                : <li>Welcome, Guest!</li>
                            }
                            <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                        </ul>
                    </div>
                </section>
                <section className="navbar-anonymous">
                    <ul>
                        <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                    </ul>
                </section>
            </nav>
        </header>
    );
};

export default Header;
