import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import RegisterIllustrator from '../../PNG/RegisterIllustrator.png'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Login =({setToken})=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let user;
    const navigate= useNavigate();

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('https://localhost:44381/api/Users/login',{email, password}).then(response=>{
          user = response.data
          localStorage.setItem('user',JSON.stringify(user))
          if(user.role =="1"){
            toast.success('Successfully logged in')
            navigate('/dashboard')
          }else{
            toast.success('Successfully logged in')
            navigate('/')
          }
        }).catch(error=>{
          toast.error('Unable to login. Please check your details and try again')
        })
        
    }
    return(
        <section class=" mt-4" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius: "1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span class="h2 fw-bold mb-0">DashlotFoods</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} class="form-control form-control-lg" required/>
                    <label class="form-label" for="email">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} class="form-control form-control-lg" required/>
                    <label class="form-label" for="password">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button onClick={handleSubmit} class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link to="/register" style={{color: "#393f81"}}>Click here to register</Link></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
            <div class="col-md-6 col-lg-5 d-none d-md-block m-auto"  >
              <img
                src={RegisterIllustrator}
                alt="login form"
                class="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
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

export default Login;
