import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate,  useLocation} from 'react-router-dom';
import { cartContext } from '../../CartProvider';

const Navbar =({categories, isLoggedin})=>{
    const [userDetails, setUserDetails]=useState(null)
    const [cart]= useContext(cartContext)
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location) 
    function getDetails(){
        const user = localStorage.getItem('user')
        if(user){
          setUserDetails(JSON.parse(user))
        }  else {
            setUserDetails(null)
        }
    }
    useEffect(()=>{
        getDetails()
    },[location.pathname])

    console.log(userDetails)
    const handleLogout = ()=>{
        localStorage.clear()
        getDetails()
        navigate("/login")
    }


    return(
        <nav class="navbar navbar-expand-lg navbar-light " style={{zIndex:"1000", background:"#fff"}}>
        <div class="container-fluid pe-lg-2 p-0"> <Link to="/" class="navbar-brand font-weight-bold fw-3"><i class="fas fa-cubes fa ml-3" style={{color: "#ff6219"}}></i>DashlotFoods</Link> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item"> <Link class="nav-link pr-3 ml-4 font-weight-bold" to="/">HOME</Link> </li>
                    <li class="nav-item"> <Link class="nav-link pr-3 ml-4 font-weight-bold" to="/about">ABOUT US</Link> </li>
                    <li class="nav-item"> <Link class="nav-link pr-3 ml-4 font-weight-bold" to="/contact-us">CONTACT</Link> </li>
                </ul>
                <ul class="navbar-nav icons ml-auto mb-2 mb-lg-0">
                    <li class=" nav-item pr-3"> <a href="" class="fas fa-heart"> <span class="num rounded-circle">1</span> </a> </li>
                    <li class=" nav-item pr-3"> <Link to="/cart" class="fas fa-solid fa-cart-shopping"> <span class="num rounded-circle">{cart.length}</span> </Link> </li>
                    {userDetails ?
                    (
                        <div className="dropdown">
                        <div className="dropbtn">
                        <li class=" nav-item pr-3"><i class="fas fa-solid fa-user" ></i> {`${userDetails.firstName} ${userDetails.lastName}`}</li>
                        </div>
                        {userDetails.role ==1 ?(
                        <div className="dropdown-content">
                            <Link to="/dashboard" >Dashboard</Link>
                          <a onClick={handleLogout} href="#">Logout</a>
                        </div>):(
                        <div className="dropdown-content">
                          <a onClick={handleLogout} href="#">Logout</a>
                        </div>)}
                      </div>
                    ):(<Link to="/login"><li class=" nav-item pr-3"> <i class="fas fa-solid fa-user" > </i> Login</li></Link>)}
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;
<i class="fa-solid fa-cart-shopping"></i>
