import Food from '../food.png'
import Beverages from '../beverages.png'
import Beverage2 from '../beverages_copy.png'
import video from '../Video/happyfresh.mp4'
const Carousel =()=>{
    return(
        <div id="carouselExampleIndicators" class="carousel " data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <video src={video} autoPlay muted loop class="d-block w-100" alt="..."></video>
                </div>
            </div>
        </div>
    )
}

export default Carousel;