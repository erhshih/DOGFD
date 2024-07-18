import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs'
import Activity from './Pages/Activity'
import Introduce from './Pages/Introduce'
import Register from './Pages/Register'
import Help from './Pages/Help'
import foods_banner from './Components/Assets/banner_1.png'
import toys_banner from './Components/Assets/banner_2.png'
import health_banner from './Components/Assets/banner_3.png'

function App() {
  return (
    <div className="App">
      <Router basename="DOGFD">
        <ScrollToTop />
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route 
            path='/foods' 
            element={
              <ShopCategory 
                banner={foods_banner} 
                text={'FOODS'} 
                background={"linear-gradient(to right, #ffc766, #fffeed"} 
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
                background={"linear-gradient(to right, #78c7ff, #f9ffcf )"} 
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
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/introduce' element={<Introduce/>}/>
          <Route path='/activities' element={<Activity/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/help' element={<Help/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
