import { useEffect, useState } from "react";
import axios from 'axios'
import styles from './Category.module.css'
import ProductItem from "../ProductItem/ProductItem";
const Category =({categories, addToCart})=>{
    const[products, setProducts]= useState([])
    const getProducts=async()=>{
        const response = await axios.get("https://localhost:44381/api/Products")
        setProducts(response.data)
    }
    
    
    console.log("products",products)

    let filter =products.filter((product)=>categories.id === product.categoryId)
    console.log(filter)

    useEffect(()=>{
        getProducts()
    },[])
    return(
        <section style={{backgroundColor:"#eee"}}>
            {categories.map((category,index)=>(
                <div className="container py-5">
                    <h3 className={styles.category_heading}>{category.name}</h3>
                    <hr/>
                    <div className="row">
                        {products.filter((product)=>category.id === product.categoryId).map(product=>(
                            <ProductItem product={product} price={product.price} category={category.name} image={product.imageUrl} name={product.name} productId={product.id} addToCart={addToCart}/>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Category;
