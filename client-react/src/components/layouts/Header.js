import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <>
    <nav id="mainNavbar" className="navbar bg-dark navbar-dark navbar-expand fixed-top">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/AddArticle" className="nav-link">Add Article</Link>
          </li>
          <li className="nav-item">
            <Link to="/Creators" className="nav-link">Site Creators</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="jumbotron jumbotron-cover-image" id="header">
        <h1 className="display-3">Lifestyle Blog</h1>
    </div>
    </>
);

export default Header;