import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import RegisterIllustrator2 from '../../PNG/loginIllustrator.png'

const Register =()=>{
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('password')
    let user;
    const navigate= useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('https://localhost:44381/api/Users/register',{firstName,lastName, email, password}).then(response=>{
          console.log(response.data)
          toast.success(response.data)
        }).catch(error=>{
          toast.error('An acoount with this email already exists')
        })
        
    }
    return(
        <section className="mt-4" style={{backgroundColor: "#eee"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{borderRadius: "1rem"}}>
                <div class="row g-0">
                  
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
      
                      <form >
      
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                          <span class="h2 fw-bold mb-0">DashlotFoods</span>
                        </div>
      
                        <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Create a new account</h5>
                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" onChange={(e)=>{setFirstName(e.target.value)}} class="form-control form-control-lg" />
                          <label class="form-label" for="form2Example17">First Name</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" onChange={(e)=>{setLastName(e.target.value)}} class="form-control form-control-lg" />
                          <label class="form-label" for="form2Example17">Last Name</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" onChange={(e)=>{setEmail(e.target.value)}} class="form-control form-control-lg" required/>
                          <label class="form-label" for="form2Example17">Email address</label>
                        </div>
      
                        <div class="form-outline mb-4">
                          <input type="password" id="form2Example27" onChange={(e)=>{setPassword(e.target.value)}} class="form-control form-control-lg" required/>
                          <label class="form-label" for="form2Example27">Password</label>
                        </div>
      
                        <div class="pt-1 mb-4">
                          <button onClick={handleSubmit} class="btn btn-dark btn-lg btn-block" type="button">Create Account</button>
                        </div>
      
                        <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Already have an account? <Link to="/login" style={{color: "#393f81"}}>Login here</Link></p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
                      </form>
      
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-5 d-none d-md-block" style={{marginTop:"6.5rem"}}>
                    <img
                      src={RegisterIllustrator2}
                      alt="login form"
                      class="img-fluid" style={{borderRadius: "0 1rem 1rem 0"}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster/>
      </section>
    )
}

export default Register