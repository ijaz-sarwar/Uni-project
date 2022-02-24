import React from 'react';

function Footer() {
  return (
    <div>
      <div>
        <footer className='footer-main'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='block text-center'>
                  <div className='footer-logo'>
                    <img
                      src='images/footer-logo.png'
                      alt='logo'
                      className='img-fluid'
                    />
                  </div>
                  <ul className='social-links-footer list-inline'>
                    <li className='list-inline-item'>
                      <a href='https://www.facebook.com/ISM-Events-103477412283597'>
                        <i className='fa fa-facebook' />
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-instagram' />
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-rss' />
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-vimeo' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Subfooter */}
        <footer className='subfooter'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <div className='copyright-text'>
                  <p>
                    <a href='#'>ISM Event</a> © 2022 All Right Reserved
                  </p>
                </div>
              </div>
              <div className='col-md-6'>
                <a href='#' className='to-top'>
                  <i className='fa fa-angle-up' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
