import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../CartProvider";
const LoggedInNavbar =()=>{
    const [cart] =useContext(cartContext)
    return(
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid pe-lg-2 p-0"> <Link to="/" class="navbar-brand fw-bold fs-3"><i class="fas fa-cubes fa me-3" style={{color: "#ff6219"}}></i>DashlotFoods</Link> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"> <a class="nav-link pr-3 me-4 fw-bold active" aria-current="page" href="#">HOME</a> </li>
                        <li class="nav-item"> <a class="nav-link pr-3 me-4 fw-bold" href="#">SHOP</a> </li>
                        <li class="nav-item"> <a class="nav-link pr-3 me-4 fw-bold" href="#">PAGES</a> </li>
                        <li class="nav-item"> <a class="nav-link pr-3 me-4 fw-bold" href="#">BLOG</a> </li>
                        <li class="nav-item"> <a class="nav-link pr-3 me-4 fw-bold" href="#">CONTACT</a> </li>
                    </ul>
                    <ul class="navbar-nav icons ml-auto mb-2 mb-lg-0">
                        <li class=" nav-item pr-3"> <a href="" class="fas fa-heart"> <span class="num rounded-circle">1</span> </a> </li>
                        <li class=" nav-item pr-3"> <Link to="/cart" class="fas fa-solid fa-cart-shopping"> <span class="num rounded-circle">{cart.length}</span> </Link> </li>
                        <Link to="/login"><li class=" nav-item pr-3"> <i class="fas fa-solid fa-user" > </i> Username</li></Link>
                        <li class=" nav-item pr-3"> <Link to="/dashboard" >Dashboard </Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default LoggedInNavbar;