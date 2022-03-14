import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const AddNewProduct = () => {
    const [categories, setCategories]=useState([])
    const [productName, setproductName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [categoryId,setCategoryId] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null)

    const getCategories =async()=>{
        const response = await axios.get("https://localhost:44381/api/Categories");
        setCategories(response.data)
    }
    useEffect(()=>{
        getCategories()
    },[categories])

    const handleUpload = async ()=>{
        const formData = new FormData();
        formData.append("name",productName);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("imageFile", selectedImage);
        formData.append("categoryId",categoryId)

        const response =axios.post('https://localhost:44381/api/Products',formData,{
            headers:{
                'Authorization':JSON.parse(localStorage.getItem('user')).token,
                'content-type':'application/json'
            }
        })
        toast.success('New product added successfully');
    }
  return (
    <div className='col-6'>
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
                {categories.map((category,index)=>(
                    <option key={index} value={category.id}>{category.name} </option>
                ))}
            </select>
            </div>
             <div><label>Price</label>
            <input className='form-control' type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
            </div>
            <div>
                <label>Product Image</label>
                <input className='form-control' type="file" onChange={(e)=>setSelectedImage(e.target.files[0])} required/>
            </div>
            <Toaster/>
        </form>
        <button className='btn btn-primary ml-auto' onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default AddNewProduct