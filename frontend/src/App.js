
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Company from '../src/Components/Footer/Company/Company';
import About from '../src/Components/Footer/About/About';
import Contact from '../src/Components/Footer/Contact/Contact';
import Productall from './Components/Footer/Productall/Productall';
import Offices from '../src/Components/Footer/Offices/Offices'
import Checkout from '../src/Pages/Checkout'
import Payment from '../src/Pages/Payment'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout />} /> 
        <Route path='/payment' element={<Payment />} /> 
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/productall' element={<Productall/>}/>
        <Route path='/offices' element={<Offices/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
