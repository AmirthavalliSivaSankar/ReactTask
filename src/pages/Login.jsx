
import React, { useRef,useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { checkValidData } from '../utils/validate';



const Login= () =>{
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const [errorMessage,setErrorMessage]=useState();
    let navigate = useNavigate();

   
      const onSubmit = async (e) => {
        e.preventDefault();

        const error= checkValidData(emailref.current.value,passwordref.current.value);
        if(error){
            setErrorMessage(error);
            return;
        }
        setErrorMessage(null);
            
            localStorage.setItem('email', emailref.current.value)
            localStorage.setItem('Password', passwordref.current.value);
            navigate("/home")
        
      };
  return (
    <div className="container p-3 my-3 border col-sm-5">
      <form  onSubmit={e => onSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              ref={emailref}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              ref={passwordref}
            />
          </div>

          <p className="text-danger">{errorMessage}</p>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
  )
}
export default Login;