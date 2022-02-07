import React from 'react';
import GoogleMap from './../../component/googleMap/GoogleMap';

function Faq() {
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>FAQS</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>FAQS</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*=========================
=            FAQ            =
==========================*/}
        <section className='section faq'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h3>
                    Our <span className='alternate'>FAQ</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusm tempor incididunt ut labore dolore magna
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='accordion-block'>
                  <div id='accordion'>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseOne'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseOne'
                        className='collapse show'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseTwo'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseTwo'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseThree'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseThree'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseFour'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseFour'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseFive'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseFive'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='accordion-block'>
                  <div id='accordionTwo'>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseSix'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseSix'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseSeven'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseSeven'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseEight'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseEight'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseNine'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseNine'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a data-toggle='collapse' href='#collapseTen'>
                            <span className='fa fa-plus-circle' />
                            Where does it come from?
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseTen'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of FAQ  ====*/}
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
      </div>
      <GoogleMap />
    </div>
  );
}

export default Faq;
