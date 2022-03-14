import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import EditProducts from './EditProducts'



const ViewAllProducts = () => {
    const [products, setProducts] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [currentProduct, setCurrentProduct]= useState({})
    useEffect(async()=>{
        const response = await axios.get('https://localhost:44381/api/Products/')
        setProducts(response.data)
        
    },[products])
    console.log(products)
    const handleDelete=async(id)=>{
        await axios.delete(`https://localhost:44381/api/Products/${id}`,{
          headers:{
            'Authorization':JSON.parse(localStorage.getItem('user')).token,
            'content-type':'application/json'
          }
        })
        toast.success('Product successfully deleted');
  
      }
      const handleModal=(product)=>{
        setModalShow(true); 
        setCurrentProduct(product)
      }
    
  return (
    <div>
        
         <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">Product</th>
              <th scope='col'>Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((product, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td><img src={product.imageUrl} alt="" height="100px" width="100px" className='img-thumbnail' /></td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <div className="d-flex g-2">
                      <button
                        className="btn btn-info mr-1" onClick={()=>{handleModal(product)}}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={()=>{handleDelete(product.id)}}>Delete</button>
                      <Toaster/>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody> 
              </table>
      <EditProducts show={modalShow}
        onHide={() => setModalShow(false)} product={currentProduct} />
    </div>
  )
}

export default ViewAllProducts