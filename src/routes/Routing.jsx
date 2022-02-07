import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import Spiner from './../common/Spiner';
import Home from '../pages/home/Home';
import Navbar from './../pages/navbar/Navbar';
import Footer from './../pages/footer/Footer';
import Speaker from './../pages/speaker/Speaker';
import AboutUs from './../pages/webPages/AboutUs';
import SingleSpeaker from './../pages/webPages/SingleSpeaker';
import Gallery from './../pages/webPages/Gallery';
import Testimonial from '../pages/webPages/Testimonial';
import Pricing from './../pages/webPages/Pricing';
import Faq from './../pages/webPages/Faq';
import Schedule from './../component/schedule/Schedule';
import Sponsor from './../pages/sponsor/Sponsor';
import News from '../pages/news/News';
import Contact from './../pages/contact/Contact';
function Routing() {
  return (
    <Fragment>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />,
            <Route exact path='/speakers' element={<Speaker />} />
            <Route exact path='/about' element={<AboutUs />} />
            <Route exact path='/single-speaker' element={<SingleSpeaker />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/testimonial' element={<Testimonial />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/FAQ' element={<Faq />} />
            <Route exact path='/schedule' element={<Schedule />} />
            <Route exact path='/sponsor' element={<Sponsor />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </React.Suspense>
    </Fragment>
  );
}

export default Routing;
