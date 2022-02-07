import React from 'react';

function PricingTable() {
  return (
    <div>
      <section className='section pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3>
                  Get <span className='alternate'>ticket</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusm tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              {/* Pricing Item */}
              <div className='pricing-item'>
                <div className='pricing-heading'>
                  {/* Title */}
                  <div className='title'>
                    <h6>Starter</h6>
                  </div>
                  {/* Price */}
                  <div className='price'>
                    <h2>
                      39.00<span>$</span>
                    </h2>
                    <p>/Person</p>
                  </div>
                </div>
                <div className='pricing-body'>
                  {/* Feature List */}
                  <ul className='feature-list m-0 p-0'>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />1
                        Comfortable Seats
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />
                        Free Lunch and Coffee
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-times-circle unavailable' />
                        Certificate
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-times-circle unavailable' />
                        Easy Access
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='pricing-footer text-center'>
                  <a href='#' className='btn btn-transparent-md'>
                    Buy a ticket
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              {/* Pricing Item */}
              <div className='pricing-item featured'>
                <div className='pricing-heading'>
                  {/* Title */}
                  <div className='title'>
                    <h6>Standard</h6>
                  </div>
                  {/* Price */}
                  <div className='price'>
                    <h2>
                      49.00<span>$</span>
                    </h2>
                    <p>/Person</p>
                  </div>
                </div>
                <div className='pricing-body'>
                  {/* Feature List */}
                  <ul className='feature-list m-0 p-0'>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />1
                        Comfortable Seats
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />
                        Free Lunch and Coffee
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />
                        Certificate
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-times-circle unavailable' />
                        Easy Access
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='pricing-footer text-center'>
                  <a href='#' className='btn btn-main-md'>
                    Buy a ticket
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 m-auto'>
              {/* Pricing Item */}
              <div className='pricing-item'>
                <div className='pricing-heading'>
                  {/* Title */}
                  <div className='title'>
                    <h6>Platinum</h6>
                  </div>
                  {/* Price */}
                  <div className='price'>
                    <h2>
                      99.00<span>$</span>
                    </h2>
                    <p>/Person</p>
                  </div>
                </div>
                <div className='pricing-body'>
                  {/* Feature List */}
                  <ul className='feature-list m-0 p-0'>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />1
                        Comfortable Seats
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />
                        Free Lunch and Coffee
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />
                        Certificate
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className='fa fa-check-circle available' />
                        Easy Access
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='pricing-footer text-center'>
                  <a href='#' className='btn btn-transparent-md'>
                    Buy a ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingTable;
