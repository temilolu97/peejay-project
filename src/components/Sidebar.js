import { Link, useLocation } from "react-router-dom";

const Sidebar=()=>{
    const location = useLocation()
    
 return(
   <div  className=" h-100">
        <nav class="nav flex-column nav-tabs h-100" style={{lineHeight:"5"}}>
            <Link to='/dashboard' className={location.pathname === "/dashboard" ? "activeSidebar border-bottom" : "nav-link border-bottom"} aria-current="page" href="#">Manage Categories</Link>
            <Link to='/dashboard/manage-products' className={location.pathname === "/dashboard/manage-products " ? "activeSidebar border-bottom" : "nav-link border-bottom"} aria-current="page" href="#">Manage Products</Link>
            
            <a class="nav-link border-bottom" href="#">Logout</a>
        </nav>
   </div>
 )
}
export default Sidebar;