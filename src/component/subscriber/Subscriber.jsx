import React from 'react';

function Subscriber() {
  return (
    <div>
      <section className='cta-subscribe bg-subscribe overlay-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mr-auto'>
              {/* Subscribe Content */}
              <div className='content'>
                <h3>
                  Subscribe to Our <span className='alternate'>Newsletter</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusm tempor
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
  );
}

export default Subscriber;
