import React from 'react';
import Prenavbar from './components/Prenavbar.js';
import Navbar from './components/Navbar.js';
import NavOptions from './components/NavOptions.js';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js'
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import data from './data/data.json';
import './App.css';


function App() {
  return (
    <Router >
      {/* <switch> */}
      <Prenavbar />


      <Navbar />


      <NavOptions miPhones = {data.miPhones} redmiPhones = {data.redmiPhones} tv={data.tv} home={data.home} fitnessAndLifeStyle={data.fitnessAndLifeStyle} laptops = {data.laptop} accessories = {data.accessories}  audio = {data.audio}/>


      <Slider start={data.banner.start} />

      <Offers offer={data.offer} />

      <Heading text="STAR PRODUCTS" />

      <StarProduct starProduct={data.starProduct}/>

      <Heading text="HOT ACCESSORIES"/>


      <HotAccessoriesMenu />


      <Routes>  
     <Route exact path='/' element={<HotAccessories music={data.hotAccessories.music}  musicCover={data.hotAccessoriesCover.music} />}></Route>
     <Route exact path='/smartDevices' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice}  smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
     <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home}  smartDeviceCover={data.hotAccessoriesCover.home} />}></Route>
     <Route exact path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle}  lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}></Route>
     <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories}  mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>


      <Heading  text="PRODUCT REVIEWS" />
      <ProductReviews  ProductReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner end={data.banner.end} />
      <Footer support={data.footer.support} shopAndLearn={data.footer.shopAndLearn} retailStore={data.footer.retailStore} aboutUs={data.footer.aboutUS} contactUs={data.footer.contactUs} />
    {/* </switch> */}
    </Router>

  );
}

export default App;
