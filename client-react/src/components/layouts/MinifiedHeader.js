import React from 'react';
import { Link } from 'react-router-dom';

const MinifiedHeader = ({ title }) => (
  <div>
    <nav id="mainNavbar" className="navbar bg-dark navbar-dark navbar-expand fixed-top">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nabar nav-item">
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
  </div>
);

export default MinifiedHeader;