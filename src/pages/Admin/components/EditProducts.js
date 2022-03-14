import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

const EditProducts = (props) => {
    const [productName, setproductName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [categoryId,setCategoryId] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(()=>{
       setproductName(props.product.name)
       setDescription(props.product.description)
       setCategoryId(props.product.categoryId)
       setPrice(props.product.price)
       setSelectedImage(props.product.selectedImage) 
    },[props.product])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Upload a new product</h3>
            <form className='mb-3'>
                <div><label >Product Name</label>
                <input className='form-control' type="text" value={productName} onChange={(e)=>{setproductName(e.target.value)}} required/>
                </div>
                <div><label>Product Description</label>
                <input className='form-control' type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
                </div>
                <div><label>Category</label>
                <select className='form-control' value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>
                    <option >Please pick an option</option>
                    {/* {categories.map((category,index)=>(
                        <option key={index} value={category.id}>{category.name} </option>
                    ))} */}
                </select>
                </div>
                <div><label>Price</label>
                <input className='form-control' type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
                </div>
                <div>
                    <label>Product Image</label>
                    <input className='form-control' type="file" onChange={(e)=>setSelectedImage(e.target.files[0])} required/>
                </div>
            </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      <Toaster/>
    </Modal>
  )
}

export default EditProducts