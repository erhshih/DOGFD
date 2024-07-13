import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import foods_banner from './Components/Assets/banner_1.png'
import toys_banner from './Components/Assets/banner_2.png'
import health_banner from './Components/Assets/banner_3.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route 
            path='/foods' 
            element={
              <ShopCategory 
                banner={foods_banner} 
                text={'FOODS'} 
                background={"linear-gradient(to right, #fef486, #78c7ff)"} 
                category="foods" 
              />
            }
          />
          <Route
            path='/toys' 
            element={
              <ShopCategory 
                banner={toys_banner} 
                text={'TOYS'} 
                background={"linear-gradient(to right, #fef486, #78c7ff )"} 
                category="toys"
              />
            }
          />
          <Route 
            path='/health' 
            element={
              <ShopCategory 
                banner={health_banner} 
                text={'HEALTH'} 
                background={"linear-gradient(to right, #fef486, #78c7ff)"} 
                category="health"
              />
            }
          />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
