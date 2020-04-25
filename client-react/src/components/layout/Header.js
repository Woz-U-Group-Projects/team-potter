import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ title }) => (
    <div>
       <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AddArticle">Add Article</NavLink>
          </li>
        </ul>
        
    </div>
);

export default Header;