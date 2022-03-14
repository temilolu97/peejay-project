import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cartContext } from '../../CartProvider'

const SearchResult = (props) => {
    const location = useLocation()
    const [cart, setCart] = useContext(cartContext)
    const AddToCart =(product)=>{
        const{id} = product
        const exist = cart.findIndex(x=> x.id === id);
        console.log(exist)
        if(exist!==-1){
            cart[exist].qty++
            console.log(cart)
        }
        else{
            setCart([...cart,{...product, qty:1}])
        }
        
    }
    const state = location.state
  return (
    <div className='container-fluid vh-100'>
        <h4>Your search result</h4>
        <div className='row'>
            {state.map((item,index)=>(
                <div key={index} className='col-sm-12 col-md-4 col-lg-3'>
                    <div class="card">
                <div class="d-flex justify-content-between p-3">
                </div>
                <img
                    src={item.imageUrl}
                    class="card-img-top"
                    alt="Laptop"
                />
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted"></a></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                    <Link to="#" >
                        <h5 class="mb-0">{item.name}</h5>
                    </Link>
                    <h5 class="text-dark mb-0">£{item.price}</h5>
                    </div>
                    <div className="text-center">
                    <button onClick={()=>AddToCart(item)} type="button" class="btn btn-outline-success btn-block">Add to cart</button>
                    </div>
                    
                </div>
            </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SearchResult

