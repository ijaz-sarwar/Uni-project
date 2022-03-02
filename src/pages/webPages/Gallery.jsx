import React from 'react';

function Gallery() {
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>Our Gallery</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Our Gallery</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*=============================
=            Gallery            =
==============================*/}
        <section className='section gallery'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* <div className='controls'>
                  <button
                    type='button'
                    className='control mixitup-control-active'
                    data-filter='all'>
                    All
                  </button>
                  <button
                    type='button'
                    className='control'
                    data-filter='.conference'>
                    Conference
                  </button>
                  <button
                    type='button'
                    className='control'
                    data-filter='.meeting'>
                    Meeting
                  </button>
                  <button
                    type='button'
                    className='control'
                    data-filter='.events'>
                    Events
                  </button>
                  <button
                    type='button'
                    className='control'
                    data-filter='.party'>
                    Party
                  </button>
                  <button
                    type='button'
                    className='control'
                    data-filter='.concert'>
                    Concert
                  </button>
                </div> */}
                <div className='gallery-wrapper'>
                  <div className='gallery-item mix meeting'>
                    <div className='image-block'>
                      <div className='image'>
                        <img
                          src='images/gallery/gallery-one.jpg'
                          alt='gallery-image'
                          className='img-fluid'
                        />
                        <div className='primary-overlay'>
                          <a
                            className='image-popup'
                            data-effect='mfp-with-zoom'
                            href='images/gallery/gallery-popup-one.jpg'>
                            <i className='fa fa-picture-o' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='gallery-item mix party events'>
                    <div className='image-block'>
                      <div className='image'>
                        <img
                          src='images/gallery/gallery-two.jpg'
                          alt='gallery-image'
                          className='img-fluid'
                        />
                        <div className='primary-overlay'>
                          <a
                            className='image-popup'
                            data-effect='mfp-with-zoom'
                            href='images/gallery/gallery-popup-two.jpg'>
                            <i className='fa fa-picture-o' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='gallery-item mix meeting party'>
                    <div className='image-block'>
                      <div className='image'>
                        <img
                          src='images/gallery/gallery-three.jpg'
                          alt='gallery-image'
                          className='img-fluid'
                        />
                        <div className='primary-overlay'>
                          <a
                            className='image-popup'
                            data-effect='mfp-with-zoom'
                            href='images/gallery/gallery-popup-three.jpg'>
                            <i className='fa fa-picture-o' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='gallery-item mix meeting concert'>
                    <div className='image-block'>
                      <div className='image'>
                        <img
                          src='images/gallery/gallery-four.jpg'
                          alt='gallery-image'
                          className='img-fluid'
                        />
                        <div className='primary-overlay'>
                          <a
                            className='image-popup'
                            data-effect='mfp-with-zoom'
                            href='images/gallery/gallery-popup-four.jpg'>
                            <i className='fa fa-picture-o' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='gallery-item mix concert party'>
                    <div className='image-block'>
                      <div className='image'>
                        <img
                          src='images/gallery/gallery-five.jpg'
                          alt='gallery-image'
                          className='img-fluid'
                        />
                        <div className='primary-overlay'>
                          <a
                            className='image-popup'
                            data-effect='mfp-with-zoom'
                            href='images/gallery/gallery-popup-five.jpg'>
                            <i className='fa fa-picture-o' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='gallery-item mix events conference'>
                    <div className='image-block'>
                      <div className='image'>
                        <img
                          src='images/gallery/gallery-six.jpg'
                          alt='gallery-image'
                          className='img-fluid'
                        />
                        <div className='primary-overlay'>
                          <a
                            className='image-popup'
                            data-effect='mfp-with-zoom'
                            href='images/gallery/gallery-popup-six.jpg'>
                            <i className='fa fa-picture-o' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
