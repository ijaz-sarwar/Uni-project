import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='navbar main-nav border-less fixed-top navbar-expand-lg p-0'>
        <div className='container-fluid p-0'>
          {/* logo */}
          <Link className='navbar-brand' to='/'>
            <img src='images/logo.png' alt='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='fa fa-bars' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item dropdown active dropdown-slide'>
                <Link className='nav-link' to='/' data-toggle='dropdown'>
                  Home
                  <span>/</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/speakers'>
                  Speakers
                  <span>/</span>
                </Link>
              </li>
              <li className='nav-item dropdown dropdown-slide'>
                <Link className='nav-link' to='#' data-toggle='dropdown'>
                  Pages<span>/</span>
                </Link>
                {/* Dropdown list */}
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/about'>
                    About Us
                  </Link>
                  <Link className='dropdown-item' to='/single-speaker'>
                    Single Speaker
                  </Link>
                  <Link className='dropdown-item' to='/gallery'>
                    Gallery
                  </Link>
                  <Link className='dropdown-item' to='/testimonial'>
                    Testimonial
                  </Link>
                  <Link className='dropdown-item' to='/pricing'>
                    Pricing
                  </Link>
                  <Link className='dropdown-item' to='/FAQ'>
                    FAQ
                  </Link>
                </div>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/schedule'>
                  Schedule<span>/</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/sponsor'>
                  Sponsors<span>/</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/news'>
                  News<span>/</span>
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
            <a href='#' className='ticket'>
              <img src='images/icon/ticket.png' alt='ticket' />
              <span>Buy Ticket</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
