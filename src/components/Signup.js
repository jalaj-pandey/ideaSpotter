import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import signup from "../images/signup.gif";
import '../styles/signup.css';
export const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json();  
    console.log(json)
    
    if (json.success) {
      //save token of user
      localStorage.setItem('token', json.authtoken)
      props.showAlert("SuccessFully Created Account", "success")
      navigate("/login");
      }else {
        props.showAlert("Invalid Creadentails", "danger")
      }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <h2>Create an account to use IdeaSpotter</h2>
      <img className='SigninImg' src={signup} alt="Signup Form"/>
      <div className='SigninForm'style={{"backgroundColor":"aliceblue",}}>
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="name" onChange={onChange} />
        </div><br/>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div><br/>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Password" minLength={5} required onChange={onChange} />
        </div><br/>
        <button type="submit" className="btn btn-primary button">Sign Up</button>
      </form>
      <br />
        <p>Have an account? <Link style={{color: "#2A8387"}} to="/login" >login</Link> </p>
        </div>
    </div>
  )
}

