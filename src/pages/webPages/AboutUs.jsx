import React from 'react';

function AboutUs() {
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>About Us</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>About US</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*===========================
=            About            =
============================*/}
        <section className='section about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 align-self-center'>
                <div className='image-block bg-about'>
                  <img
                    className='img-fluid'
                    src='images/speakers/featured-speaker.jpg'
                    alt
                  />
                </div>
              </div>
              <div className='col-lg-8 col-md-6 align-self-center'>
                <div className='content-block'>
                  <h2>
                    About The <span className='alternate'>Eventre</span>
                  </h2>
                  <div className='description-one'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm tempor incididunt ut labore dolore magna
                      aliqua enim ad minim veniam quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                  <div className='description-two'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmtempor incididunt ut labore et dolore magna
                      aliq enim ad minim veniam quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea.
                    </p>
                  </div>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <a href='#' className='btn btn-main-md'>
                        Buy ticket
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#' className='btn btn-transparent-md'>
                        Read more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className='section speakers bg-speaker overlay-lighter'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* Section Title */}
                <div className='section-title white'>
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
        {/*====  End of Speakers  ====*/}
        {/*==================================Testimonial==================================*/}
        <section className='section testimonial'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h3>
                    What People <span className='alternate'>Say?</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti aliquid vero harum rerum voluptates, ab, ullam.
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt-20'>
              <div className='col-lg-4 col-md-6'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis voluptate modi sunt placeat in vel illo
                      dolorem, atque maxime voluptates optio fugit iure cum ipsa
                      quo quaerat! Veritatis, modi. Laudantium provident
                      deleniti earum voluptas delectus, labore dolor dolorem
                      amet expedita.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/speaker-thumb-three.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Espen Brunberg</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis voluptate modi sunt placeat in vel illo
                      dolorem, atque maxime voluptates optio fugit iure cum ipsa
                      quo quaerat! Veritatis, modi. Laudantium provident
                      deleniti earum voluptas delectus, labore dolor dolorem
                      amet expedita.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/speaker-thumb-one.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Kaite Stricker</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mx-auto'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis voluptate modi sunt placeat in vel illo
                      dolorem, atque maxime voluptates optio fugit iure cum ipsa
                      quo quaerat! Veritatis, modi. Laudantium provident
                      deleniti earum voluptas delectus, labore dolor dolorem
                      amet expedita.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/speaker-thumb-five.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Adam Smith</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Testimonial  ====*/}
        {/*==============================================
=            Call to Action Subscribe            =
===============================================*/}
        <section className='cta-subscribe bg-subscribe overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 mr-auto'>
                {/* Subscribe Content */}
                <div className='content'>
                  <h3>
                    Subscribe to Our{' '}
                    <span className='alternate'>Newsletter</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusm tempor
                  </p>
                </div>
              </div>
              <div className='col-md-6 ml-auto align-self-center'>
                {/* Subscription form */}
                <form action='#' className='row'>
                  <div className='col-lg-8 col-md-12'>
                    <input
                      type='email'
                      className='form-control main white mb-lg-0'
                      placeholder='Email'
                    />
                  </div>
                  <div className='col-lg-4 col-md-12'>
                    <div className='subscribe-button'>
                      <button className='btn btn-main-md'>Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Call to Action Subscribe  ====*/}
        {/*================================
=            Google Map            =
=================================*/}
        <section className='map'>
          {/* Google Map */}
          <div id='map' />
          <div className='address-block'>
            <h4>Docklands Convention</h4>
            <ul className='address-list p-0 m-0'>
              <li>
                <i className='fa fa-home' />
                <span>
                  Street Address, Location, <br />
                  City, Country.
                </span>
              </li>
              <li>
                <i className='fa fa-phone' />
                <span>[00] 000 000 000</span>
              </li>
            </ul>
            <a href='#' className='btn btn-white-md'>
              Get Direction
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
