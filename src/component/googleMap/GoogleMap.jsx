import React from 'react';

function GoogleMap() {
  return (
    <div>
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
  );
}

export default GoogleMap;
