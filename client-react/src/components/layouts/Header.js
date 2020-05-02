import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
    <nav id="mainNavbar" className="navbar bg-dark navbar-dark navbar-expand fixed-top">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/AddArticle" className="nav-link">Add Article</Link>
          </li>
        </ul>
      </div>
    </nav>
);

export default Header;