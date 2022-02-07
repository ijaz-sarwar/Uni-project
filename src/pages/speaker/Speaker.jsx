import React from 'react';
import Subscriber from './../../component/subscriber/Subscriber';
import GoogleMap from './../../component/googleMap/GoogleMap';

function Speaker() {
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>Our Speaker</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Our Speaker</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*==============================
=            Speakers            =
===============================*/}
        <section className='section speakers white'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* Section Title */}
                <div className='section-title'>
                  <h3>
                    Who <span className='alternate'>Speaking?</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusm tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 1 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-one.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 2 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-two.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 3 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-three.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 4 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-four.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 5 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-five.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 1 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-six.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 7 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-five.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                {/* Speaker 8 */}
                <div className='speaker-item'>
                  <div className='image'>
                    <img
                      src='images/speakers/speaker-six.jpg'
                      alt='speaker'
                      className='img-fluid'
                    />
                    <div className='primary-overlay' />
                    <div className='socials'>
                      <ul className='list-inline'>
                        <li className='list-inline-item'>
                          <a href='#'>
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
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <i className='fa fa-pinterest' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='content text-center'>
                    <h5>
                      <a href='single-speaker.html'>Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Subscriber />
      <GoogleMap />
    </div>
  );
}

export default Speaker;
