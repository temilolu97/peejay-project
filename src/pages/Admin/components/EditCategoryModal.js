import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Toast } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast'

const EditCategoryModal = (props) => {
    const [category, setCategory] = useState(props.category.name)

    useEffect(()=>{
        setCategory(props.category.name)
    }, [props.category])

    const handleUpdate = async(newdetails,id)=>{
        const response = await axios.put(`https://localhost:44381/api/Categories/${id}`,{name: newdetails},{
            headers:{
                'Authorization':JSON.parse(localStorage.getItem('user')).token,
                'content-type':'application/json'
            }
        })
        toast.success('Successfully updated category');
        props.onHide()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Edit {props.category.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
            <div>
                <label>Category Name</label>
                <input className='form-control' type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} required/>
            </div>
            <button className='btn btn-success mt-2' onClick={(e)=>{e.preventDefault(); handleUpdate(category, props.category.id)}} type="submit" >Save Changes</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      <Toaster/>
    </Modal>
  )
}

export default EditCategoryModal