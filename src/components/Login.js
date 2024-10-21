import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import login from '../images/login.gif';


export const Login = (props) => {
    let navigate = useNavigate();
    const { showAlert } = props;

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://ideaspotterbackend.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //redirect
            localStorage.setItem('token', json.authtoken);
            showAlert("Successfully Logged in", "success");
            navigate('/');
        }
        else {
            showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <h2>Login to continue to IdeaSpotter</h2>
            <img className='LoginImg' src={login} alt="Login Form" />
            <div className='LoginForm' style={{"backgroundColor":"aliceblue"}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" style={{"line-height":"2"}}>Email: </label>
                    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="jalajpandey123@gmail.com" />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="password" style={{"line-height":"2"}}>Password: </label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="jalaj123" />
                </div>
                <div className="form-check">
                </div>
                <button type="submit" className="btn btn-primary button" >Log in</button>
                <br/>
            </form>
            <br />
                <p>Don't have an account? <Link style={{color: "#2A8387"}} to="/signup" >register</Link> </p>
            </div>
        </div>
    )
}

