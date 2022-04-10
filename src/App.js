import './App.css';
import LandingPage from './components/landing page/land'
import LoginPage from './components/login page/login';
import Signup from './components/signup/signup';
import SellerRegistration from './components/Seller/seller_registration/seller_registration'
import CustomerRegistration from './components/Customer/customer_resgistration/customer_registration'
import ButcherRegistration from './components/Butcher/butcher_registration/butcher_registration'
import CustomerLanding from './components/Customer/customer_landingPage/customer_landing'
import ButcherLanding from './components/Butcher/Butcher_landingPage/butcher_landing'
import SellerLanding from './components/Seller/Seller_LandingPage/seller_landing'
import PostAd from './components/post ad/PostAd'
import Navbar from './components/navbar/index'
import AboutUs from './components/about us/about'
import Bid from './components/Customer/bidding/bid'
import {Route,Routes} from "react-router-dom";
// import {authContext} from './Helpers/authContext'
// import {setPermissionContext} from './Helpers/setPermissions'
// import { useEffect, useState } from 'react';


function App() {
  // const [authState,setAuthState]=useState(false)
  // const [permissionState, setPermissionState]=useState(false); //Permission Set or Not
  // const [currentPermission, setCurrentPermission]=useState(-1);//Set Permission Type

  // useEffect(()=>{
  //   if(localStorage.getItem('accessToken')){
  //     setAuthState(true)
  //   }if(localStorage.getItem('permission')){
  //     setPermissionState(true)
  //     setCurrentPermission(localStorage.getItem('permission'))
  //   }
  // },[])
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} /> 
      <Route path='/signup' element={<Signup />} />
      <Route path='/signup/butcher' element={<ButcherRegistration/>}/>
      <Route path='/signup/seller' element={<SellerRegistration/>}/>
      <Route path='/signup/customer' element={<CustomerRegistration/>}/>
      <Route path='/buyer/main' element={<CustomerLanding/>}/>
      <Route path='/butcher/main' element={<ButcherLanding/>}/>
      <Route path='/seller/main' element={<SellerLanding/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/post/animal' element={<PostAd/>}/>
      <Route path='/cattle/bid'element={<Bid/>}/>
    </Routes>
    </div>
  )
}

export default App;
