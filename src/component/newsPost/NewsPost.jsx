import React from 'react';

function NewsPost() {
  return (
    <div>
      <section className='news section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3>
                  Eventre <span className='alternate'>News</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusm tempor incididunt ut labore dolore
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-8 col-10 m-auto'>
              <div className='blog-post'>
                <div className='post-thumb'>
                  <a href='news-single.html'>
                    <img
                      src='images/news/post-thumb-one.jpg'
                      alt='post-image'
                      className='img-fluid'
                    />
                  </a>
                </div>
                <div className='post-content'>
                  <div className='date'>
                    <h4>
                      20<span>May</span>
                    </h4>
                  </div>
                  <div className='post-title'>
                    <h2>
                      <a href='news-single.html'>
                        Elementum purus id ultrices.
                      </a>
                    </h2>
                  </div>
                  <div className='post-meta'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-user-o' />
                        <a href='#'>Admin</a>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-heart-o' />
                        <a href='#'>350</a>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-comments-o' />
                        <a href='#'>30</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-8 col-10 m-auto'>
              <div className='blog-post'>
                <div className='post-thumb'>
                  <a href='news-single.html'>
                    <img
                      src='images/news/post-thumb-two.jpg'
                      alt='post-image'
                      className='img-fluid'
                    />
                  </a>
                </div>
                <div className='post-content'>
                  <div className='date'>
                    <h4>
                      20<span>May</span>
                    </h4>
                  </div>
                  <div className='post-title'>
                    <h2>
                      <a href='news-single.html'>
                        Elementum purus id ultrices.
                      </a>
                    </h2>
                  </div>
                  <div className='post-meta'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-user-o' />
                        <a href='#'>Admin</a>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-heart-o' />
                        <a href='#'>350</a>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-comments-o' />
                        <a href='#'>30</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 m-md-auto col-sm-8 col-10 m-auto'>
              <div className='blog-post'>
                <div className='post-thumb'>
                  <a href='news-single.html'>
                    <img
                      src='images/news/post-thumb-three.jpg'
                      alt='post-image'
                      className='img-fluid'
                    />
                  </a>
                </div>
                <div className='post-content'>
                  <div className='date'>
                    <h4>
                      20<span>May</span>
                    </h4>
                  </div>
                  <div className='post-title'>
                    <h2>
                      <a href='news-single.html'>
                        Elementum purus id ultrices.
                      </a>
                    </h2>
                  </div>
                  <div className='post-meta'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-user-o' />
                        <a href='#'>Admin</a>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-heart-o' />
                        <a href='#'>350</a>
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-comments-o' />
                        <a href='#'>30</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPost;
