import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

//App navbar - allows user to navigate through the App
function NavBar() {
    return (
        <header className="App-header">
            <Navbar expand="sm" className="menu-items">
                <Nav className="mr-auto">
                    <NavLink to="/" activeStyle={{ opacity: "0.4" }}>
                        <h5 className="nav-item" >HOME</h5>
                    </NavLink>

                    <NavLink to="/music" activeStyle={{ opacity: "0.4" }}>
                        <h5 className="nav-item" >MUSIC</h5>
                    </NavLink>

                    <NavLink to="/videos" activeStyle={{ opacity: "0.4" }}>
                        <h5 className="nav-item">MUSIC VIDEOS</h5>
                    </NavLink>

                    <NavLink to="/movies" activeStyle={{ opacity: "0.4" }}>
                        <h5 className="nav-item" >MOVIES</h5>
                    </NavLink>

                    <NavLink to="/audiobooks" activeStyle={{ opacity: "0.4" }}>
                        <h5 className="nav-item" >AUDIO BOOKS</h5>
                    </NavLink>

                </Nav>
            </Navbar>
        </header>
    );
}

export default NavBar;