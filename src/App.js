
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banners from './Components/Assets/banner_mens.png'
import women_banners from './Components/Assets/banner_women.png'
import kids_banners from './Components/Assets/banner_kids.png'
function App() {
  return (
    <>
    <BrowserRouter> 
     <Navbar/>
     <Shop />
    
     <Routes>
      <Route path="" element={<Shop/>}></Route>
       <Route path="/SHOPPER/" element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory banners={men_banners}  category="men"/>}></Route>
      <Route path='/womens' element={<ShopCategory banners={women_banners}  category="women"/>}></Route>
      <Route path='/kids' element={<ShopCategory banners={kids_banners}  category="kid"/>}></Route>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>


     
     </Routes>
     <Footer />
    </BrowserRouter>
  
    </>
   );
}

export default App;
