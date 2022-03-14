import axios from 'axios'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import styles from './ProductDescription.module.css'
const ProductDescription=()=>{
    const [productDetails, setProductDetails] = useState({});
    let params = useParams();

    useEffect(async()=>{
        const response = await axios.get(`https://localhost:44381/api/Products/${params.productId}`)
        setProductDetails(response.data)
        console.log(productDetails)

    },[])
    return(
        <div className='row'>
            <div className='col-md-6 col-sm-12'>
            <img
            src={productDetails.imageUrl}
            alt="Kodak Brownie Flash B Camera"
            class="image-responsive"
            
            />
            </div>
            <div className='col-md-6 col-sm-12 text-center'>
                <p class={styles.sneaker}>DASHLOT FOODS</p>
                <h4 class={styles.limited}>{productDetails.name}</h4>
                <p class={styles.profile}>{productDetails.description}</p>
                <div class={styles.six}>
                    <h4 class={styles.best}>£{productDetails.price}</h4>
                    <button class={styles.besty}>50%</button>
                </div>
                <h4 class={styles.yonda}><strike>$250.00</strike></h4>
                <div>
                    <button type="button" class="btn btn-outline-success mr-4">Buy Now</button>
                    <button type="button" class="btn btn-outline-success">Add to cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDescription