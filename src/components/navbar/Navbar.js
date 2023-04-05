import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark  navbar-expand-lg bg-dark " >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My App</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            className="nav-link"
                            to="/">Главная</NavLink>
                        <NavLink
                            className="nav-link"
                            to="*">О продукте</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;