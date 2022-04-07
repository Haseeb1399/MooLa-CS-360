import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landing page/land'
import LoginPage from './components/login page/login';
import Signup from './components/signup/signup';
import SellerRegistration from './components/Seller/seller_registration/seller_registration'
import CustomerRegistration from './components/Customer/customer_resgistration/customer_registration'
import ButcherRegistration from './components/Butcher/butcher_registration/butcher_registration'
import Navbar from './components/navbar/navbar'
import {Router,Switch,Route,Routes} from "react-router-dom";


function App() {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} /> 
      <Route path='/signup' element={<Signup />} />
      <Route path='/signup/butcher' element={<ButcherRegistration/>}/>
      <Route path='/signup/seller' element={<SellerRegistration/>}/>
      <Route path='/signup/customer' element={<CustomerRegistration/>}/>
    </Routes>
    </div>
  )
}

export default App;
