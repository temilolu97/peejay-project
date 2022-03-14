import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../CartProvider'
import styles from './Cart.module.css'
const Cart =() =>{
    const [cart, setCart] = useContext(cartContext)
    if(cart.length == 0){
        return(
            <p>Your cart is currently empty. Please go back and add items to cart</p>
        )
    }
    const total = cart.reduce((acc,item)=>{
        acc= acc+ item.price*item.qty
        return acc
    },0)
     console.log(total)

     const handleRemove=(id)=>{
      const newCart = cart.filter(item=>item.id !== id)
      setCart(newCart)
     }

    //  const increaseQuantity= (item)=>{
    //   const{id} = item
    //   const exist = cart.findIndex(x=> x.id === id);
    //   console.log(exist)
    //   if(exist!==-1){
    //       cart[exist].qty++
    //   }
      
    //  }
    return(
        <section class="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">

            <div class="row">
              <div class="col-lg-8 col-sm-12">
                <h5 class="mb-3"><Link to="/" class="text-body"><i
                      class="fas fa-long-arrow-alt-left mr-2"></i>Continue shopping</Link></h5>
                <hr/>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Shopping cart</p>
                    <p class="mb-0">You have {cart.length} items in your cart</p>
                  </div>
                </div>
                {
                    cart.map((item,index)=>(
                        <div class="card mb-3" key={index}>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center">
                                    <div>
                                    <img
                                        src={item.imageUrl}
                                        class="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                                    </div>
                                    <div class="ml-3">
                                    <h5>{item.name}</h5>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                <form className={styles.form}>
                                  <div class={styles.value_button} className={styles.decrease} onclick="decreaseValue()" value="Decrease Value">-</div>
                                  <input type="number" className={styles.number} value={item.qty} />
                                  <div class={styles.value_button} className={styles.increase}  value="Increase Value">+</div>
                                </form>
                                    <div style={{width: "80px"}}>
                                    <h5 class="mb-0">$ {item.qty * item.price}</h5>
                                    </div>
                                    <a onClick={()=>handleRemove(item.id)} style={{color: "#cecec"}}><i class="fas fa-trash-alt"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
              </div>
              <div class="col-lg-4 col-sm-12">

                <div class="card bg-primary text-white rounded-3">
                  <div class="card-body">

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">${total.toFixed(2)}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$20.00</p>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Total(Incl. taxes)</p>
                      <p class="mb-2">${total +20}.00</p>
                    </div>

                    <button type="button" class="btn btn-info btn-block btn-lg">
                      <div class="d-flex justify-content-between">
                        <span>${total+20}.00</span>
                        <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Cart