import Carousel from "../components/Carousel"
import Category from "../components/Category/Category"
import Heading from "../components/Heading/Heading";
const Home =({categories, addToCart}) =>{
    return(
        <div>
            <Heading categories={categories}/>
            <div className='mt-4'>
            <Category categories={categories} addToCart={addToCart}/>
            </div>
        </div>
        
    )
}

export default Home;