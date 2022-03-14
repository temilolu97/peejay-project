import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../CartProvider";
import ModalComponent from "../../components/Modal";
import Dashboard from "../Dashboard/Dashboard";
import EditCategoryModal from "./components/EditCategoryModal";

const AllCategeories =()=>{
    const [categories, setCategories] = useState([])
    useEffect(async()=>{
        const response = await axios.get("https://localhost:44381/api/Categories");
        setCategories(response.data)
    },[categories])

    const [products] = useContext(cartContext)
    const [value, setValue] = useState("")
    const [currentCategory, setCurrentCategory]= useState({})
    const [modalShow, setModalShow] = useState(false);

    const AddNewCategory =async(e)=>{
        e.preventDefault()
        const response = await axios.post("https://localhost:44381/api/Categories",{name:value},{
            headers:{
                'Authorization':JSON.parse(localStorage.getItem('user')).token,
                'content-type':'application/json'
            }
        });
        setValue('')
    }
   

    const handleDelete=async(id)=>{
      await axios.delete(`https://localhost:44381/api/Categories/${id}`,{
        headers:{
          'Authorization':JSON.parse(localStorage.getItem('user')).token,
          'content-type':'application/json'
        }
      })
      toast.success('Category successfully deleted');

    }
    const handleModal=(category)=>{
      setModalShow(true); 
      setCurrentCategory(category)
    }
    
    return (
      <Dashboard>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 &&
              categories.map((category, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <div className="d-flex g-2">
                      <button
                        className="btn btn-info mr-1"
                        onClick={()=>{handleModal(category)}}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={()=>{handleDelete(category.id)}}>Delete</button>
                      <Toaster/>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <form className="form px-1 px-sm-5">
            <div className="form-group">
              <label htmlFor="add_category" className="form-label">
                Add Category
              </label>
              <input
                type="text"
                name="add_category"
                id="add_category"
                className="form-control"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>
            <button onClick={AddNewCategory} className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
        <EditCategoryModal show={modalShow}
        onHide={() => setModalShow(false)} category={currentCategory}/>
      </Dashboard>
    );
}
export default AllCategeories;