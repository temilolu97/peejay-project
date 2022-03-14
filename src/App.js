import axios from 'axios'
import './App.css';
import Navbar from './components/Navbars/Navbar';
import Category from './components/Category/Category';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import Heading from './components/Heading/Heading';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import LoggedInNavbar from './components/Navbars/LoggedInNavbar';
import ProtectedRoutes from './ProtectedRoutes';
import AllProducts from './pages/Admin/AllProducts';
import AllCategeories from './pages/Admin/AllCategories';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  const [categories, setCategories] = useState([])
  const [auth, setAuth] = useState(true)
  const [userDetails, setUserDetails]=useState(null)
  
  
  // const [cart, setCart] = useState([])
  // const[cartLength, setCartLength] = useState(cart.length)

  // const addToCart =(product)=>{
  //   setCart([...cart,product])
  //   console.log(cartLength)
  // }
    useEffect(async()=>{
      const user= localStorage.getItem('user')
      if(user){
        setUserDetails(JSON.parse(user))
      }
        const response = await axios.get("https://localhost:44381/api/Categories");
        setCategories(response.data)
        console.log(categories)
        
    }, categories)
    
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar isLoggedin={userDetails} />
        <Routes>
          <Route path='/' element ={<Home categories={categories} /*addToCart={addToCart}*//>}/>
          <Route path='/products/:category/:productId' element={<ProductDescription/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/dashboard' element={<AllCategeories/>}/>
            <Route path='/dashboard/manage-products' element={<AllProducts/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>  
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
