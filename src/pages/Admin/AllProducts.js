import Dashboard from "../Dashboard/Dashboard";
import {Tabs, Tab} from 'react-bootstrap'
import { cartContext } from "../../CartProvider";
import AddNewProduct from "./components/AddNewProduct";
import axios from "axios";
import ViewAllProducts from "./components/ViewAllProducts";
const AllProducts =()=>{
    
    return(
        <Dashboard>
            <Tabs defaultActiveKey="allproducts" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="allproducts" title="All Products">
                    <ViewAllProducts/>
                </Tab>
                <Tab eventKey="addproducts" title="Add a new Product">
                    <AddNewProduct/>
                </Tab>
            </Tabs>
        </Dashboard>
    )
}
export default AllProducts;