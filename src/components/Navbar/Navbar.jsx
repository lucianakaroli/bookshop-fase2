import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <h1>CRUD</h1>
                </Link>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__links">
                            Inicio
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about" className="navbar__links">
                            Sobre
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/book-form" className="navbar__links">
                            Adicionar
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/books" className="navbar__links">
                            Lista
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Navbar }