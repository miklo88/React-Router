import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='alpha'>
          MIKLO portfolio page created by Carl Redding.
        </div>
        {/* linkedin, github and instagram links */}
        <div className='bravo'>
          <div className='footer-icons'>
            <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/miklo88'>
              <i className='fab fa-github-square'></i>
            </a>
            <a href='https://instagram.com/miklo34'>
              <i className='fab fa-instagram-square'></i>
            </a>
          </div>
          {/* contact link icon => to contact component */}
          <div className='charlie'>
            <Link className='charlie-link' to='/contact'>
              <i className='fas fa-envelope-square'></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
