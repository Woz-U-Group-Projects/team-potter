import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-copyright text-center py-3">&copy;{new Date().getFullYear()} All Rights Reserved. <Link to='/'> Team Potter.
            </Link>
            </div >
        </div>
      );
}
   

export default Footer;