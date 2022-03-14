import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Carousel from '../Carousel';
import video from '../../Video/happyfresh.mp4'
import styles from './Heading.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
const Heading =({categories})=>{
    
    const [searchParam, setSearchParam] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const navigate = useNavigate()
    const handleSearch =()=>{
        console.log(searchParam)
        axios.get(`https://localhost:44381/search/${searchParam}`).then(response=>{
            setSearchResult(response.data)
            navigate("/search-result",{state: response.data})
        }).catch(error=>{
            console.log(error)
            toast.error(`No item with name ${searchParam} exists`)
        })
        
        // setSearchResult(response)
        // console.log(searchResult)
    }
    return(
        <div className="row mt-4">
            <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-2">
                <p> <a class="btn btn-primary w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"> <span class={`${styles.fas} fas fa-bars`}><span class="ps-3">Categories</span></span> <span class="fas fa-chevron-down"></span> </a> </p>
                <div class="collapse show border" id="collapseExample">
                    <ul class="list-unstyled">
                        {categories.map((category,index)=>(
                            <li><a class="dropdown-item" href="#">{category.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div class="col-lg-9 col-md-6 col-sm-12">
                <div class="input-group">
                    
                    <input type="hidden" name="search_param" value="all" id="search_param"/>        
                    <input type="text" class="form-control" value={searchParam} onChange={(e)=>{setSearchParam(e.target.value)}} name="searchparam" placeholder="Search term..."/>
                    <span class="input-group-btn">
                        <button onClick={handleSearch} class="btn btn-default" type="submit"><span class="fas fa-search"></span></button>
                    </span>
                </div>
                <Carousel/>
               <Toaster/>
            </div>
        </div>
    )
}

export default Heading;