import React from 'react';

function Register() {
  return (
    <div>
      <section className='registration'>
        <div className='container-fuild p-0'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='service-block bg-service overlay-primary text-center'>
                <div className='row no-gutters'>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-microphone' />
                      <h5>8 Speakers</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-flag' />
                      <h5>500 + Seats</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-ticket' />
                      <h5>300 tickets</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-calendar' />
                      <h5>3 days event</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='registration-block bg-registration overlay-dark'>
                <div className='block'>
                  <div className='title text-left'>
                    <h3>
                      Register to <span className='alternate'>Eventre</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>
                  <form action='#' className='row'>
                    <div className='col-md-6'>
                      <input
                        type='text'
                        className='form-control main'
                        placeholder='Your Name'
                      />
                    </div>
                    <div className='col-md-6'>
                      <input
                        type='email'
                        className='form-control main'
                        placeholder='Email'
                      />
                    </div>
                    <div className='col-md-6'>
                      <input
                        type='text'
                        className='form-control main'
                        placeholder='Phone'
                      />
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <select
                          className='form-control main'
                          id='select-ticket'>
                          <option>Ticket Type</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-12'>
                      <button type='submit' className='btn btn-white-md'>
                        Register Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
