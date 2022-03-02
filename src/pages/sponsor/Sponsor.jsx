import React from 'react';
import Subscriber from '../../component/subscriber/Subscriber';
import GoogleMap from '../../component/googleMap/GoogleMap';
import Sponser from '../../component/sponser/Sponser';
function Sponsor() {
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>Our Sponsors</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Our Sponsors</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*==============================
=            Sponsors            =
===============================*/}
        <Sponser />
      </div>
      <Subscriber />
      <GoogleMap />
    </div>
  );
}

export default Sponsor;
