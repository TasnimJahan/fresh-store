import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className="header container">
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light rounded">
                    <a className="navbar-brand" href="#">EASY RIDE</a>
                    <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                        <ul className="navbar-nav ">
                            <li className="nav-item nv">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item nv">
                                <Link className="orders" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item nv">
                                <Link to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item nv">
                                <Link to="/contact">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login"><button className="btn btn-warning">{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || 'Login'}</button></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;