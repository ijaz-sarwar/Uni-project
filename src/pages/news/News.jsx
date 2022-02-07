import React from 'react';
import GoogleMap from '../../component/googleMap/GoogleMap';
import Subscriber from '../../component/subscriber/Subscriber';

function News() {
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>News Details</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>News Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*================================
=            News Posts            =
=================================*/}
        <section className='news section'>
          <div className='container'>
            <div className='row mt-30'>
              <div className='col-lg-8 col-md-10 mx-auto'>
                <div className='block'>
                  {/* Article */}
                  <article className='blog-post single'>
                    <div className='post-thumb'>
                      <img
                        src='images/news/single-post.jpg'
                        alt='post-image'
                        className='img-fluid'
                      />
                    </div>
                    <div className='post-content'>
                      <div className='date'>
                        <h4>
                          20<span>May</span>
                        </h4>
                      </div>
                      <div className='post-title'>
                        <h3>Elementum purus id ultrices.</h3>
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
                      <div className='post-details'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusm tempor incididunt ut labore dolore
                          magna aliqua enim ad minim veniam quis nostrud.laboris
                          nisi ut aliquip ex ea commodo conse quat. Duis aute
                          irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt.
                        </p>
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam. quaerat voluptatem.
                        </p>
                        <div className='quotes'>
                          <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusm tempor incididunt ut labore
                            dolore magna aliqua enim ad minim veniam quis
                            nostrud.laboris nisi ut aliquip ex ea commodo
                            consequat.{' '}
                          </blockquote>
                        </div>
                        <p>
                          Amet consectetur adipisicing elit, sed do eiusm tempor
                          incididunt ut labore dolore magna aliqua enim ad minim
                          veniam quis nostrud.laboris nisi ut aliquip ex ea
                          commodo conse
                        </p>
                        <div className='share-block'>
                          <div className='tag'>
                            <p>Tags:</p>
                            <ul className='list-inline'>
                              <li className='list-inline-item'>
                                <a href='#'>Event,</a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>Conference,</a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>Business</a>
                              </li>
                            </ul>
                          </div>
                          <div className='share'>
                            <p>Share:</p>
                            <ul className='social-links-share list-inline'>
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
                                  <i className='fa fa-instagram' />
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-rss' />
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-vimeo' />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Comment Section */}
                  <div className='comments'>
                    <h5>Comments (3)</h5>
                    {/* Comment */}
                    <div className='media comment'>
                      <img
                        src='images/speakers/speaker-thumb-four.jpg'
                        alt='image'
                      />
                      <div className='media-body'>
                        <h6>Jessica Brown</h6>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <span className='fa fa-calendar' />
                            Mar 20, 2016
                          </li>
                          <li className='list-inline-item'>
                            <a href='#'>Reply</a>
                          </li>
                        </ul>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudant tota rem ape
                          riamipsa eaque quae nisi ut aliquip commodo consequat.
                        </p>
                        {/* Nested Comment */}
                        <div className='media comment'>
                          <img
                            src='images/speakers/speaker-thumb-three.jpg'
                            alt='image'
                          />
                          <div className='media-body'>
                            <h6>Jonathan Doe</h6>
                            <ul className='list-inline'>
                              <li className='list-inline-item'>
                                <span className='fa fa-calendar' />
                                Mar 20, 2016
                              </li>
                            </ul>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudant tota
                              rem ape riamipsa eaque quae nisi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment */}
                    <div className='media comment'>
                      <img
                        src='images/speakers/speaker-thumb-two.jpg'
                        alt='image'
                      />
                      <div className='media-body'>
                        <h6>Adam Smith</h6>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <span className='fa fa-calendar' />
                            Mar 20, 2016
                          </li>
                          <li className='list-inline-item'>
                            <a href='#'>Reply</a>
                          </li>
                        </ul>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudant tota rem ape
                          riamipsa eaque quae nisi ut aliquip commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='comment-form'>
                    <h5>Leave A Comment</h5>
                    <form action='#' className='row'>
                      <div className='col-12'>
                        <textarea
                          className='form-control main'
                          name='comment'
                          id='comment'
                          rows={10}
                          placeholder='Your Review'
                          defaultValue={''}
                        />
                      </div>
                      <div className='col-md-6'>
                        <input
                          type='text'
                          className='form-control main'
                          name='text'
                          id='name'
                          placeholder='Your Name'
                        />
                      </div>
                      <div className='col-md-6'>
                        <input
                          type='email'
                          className='form-control main'
                          name='email'
                          id='email'
                          placeholder='Your Email'
                        />
                      </div>
                      <div className='col-12'>
                        <button className='btn btn-main-md' type='submit'>
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-10 mx-auto'>
                <div className='sidebar'>
                  {/* Search Widget */}
                  <div className='widget search p-0'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control main m-0'
                        id='expire'
                        placeholder='Search...'
                      />
                      <span className='input-group-addon'>
                        <i className='fa fa-search' />
                      </span>
                    </div>
                  </div>
                  {/* Category Widget */}
                  <div className='widget category'>
                    {/* Widget Header */}
                    <h5 className='widget-header'>Categories</h5>
                    <ul className='category-list m-0 p-0'>
                      <li>
                        <a href>
                          Strategy Planning{' '}
                          <span className='float-right'>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Corporate Identity{' '}
                          <span className='float-right'>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Brand Creation<span className='float-right'>(3)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Entertainment<span className='float-right'>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Conference<span className='float-right'>(7)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Latest post */}
                  <div className='widget latest-post'>
                    <h5 className='widget-header'>Latest Post</h5>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-one.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href>
                            Nam hendrerit eros in ligula suscipit suscipit
                          </a>
                        </h6>
                        <p href='#'>
                          <span className='fa fa-calendar' />
                          02 Feb, 2017
                        </p>
                      </div>
                    </div>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-two.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href>
                            Nam hendrerit eros in ligula suscipit suscipit
                          </a>
                        </h6>
                        <p href='#'>
                          <span className='fa fa-calendar' />
                          02 Feb, 2017
                        </p>
                      </div>
                    </div>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-three.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href>
                            Nam hendrerit eros in ligula suscipit suscipit
                          </a>
                        </h6>
                        <p href='#'>
                          <span className='fa fa-calendar' />
                          02 Feb, 2017
                        </p>
                      </div>
                    </div>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-four.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href>
                            Nam hendrerit eros in ligula suscipit suscipit
                          </a>
                        </h6>
                        <p href='#'>
                          <span className='fa fa-calendar' />
                          02 Feb, 2017
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Popular Tag Widget */}
                  <div className='widget tags'>
                    {/* Widget Header */}
                    <h5 className='widget-header'>Popular Tags</h5>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <a href='#'>Culture</a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>Social</a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>News</a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>Events</a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>Sports</a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#'>Music</a>
                      </li>
                    </ul>
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

export default News;
