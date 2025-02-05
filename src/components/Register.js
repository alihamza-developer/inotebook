import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = (props) => {

  const API_URL = process.env.REACT_APP_API_URL,
    navigate = useNavigate(),
    [credentials, setCredentials] = useState({
      name: "",
      email: "",
      password: ""
    });

  // On Change
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // Handle Form
  const handleForm = async (e) => {
    e.preventDefault();
    let response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    });

    response = await response.json();

    if (response.errors) {
      response.errors.forEach(error => {
        props.setAlert(error.msg, 'danger');
      });
      return true;
    }
    if (response.status === 'success') {
      props.setAlert(response.data, response.status === "error" ? "danger" : response.status);
      navigate("/login");
    }
    else
      props.setAlert(response.data, response.status === "error" ? "danger" : response.status);


  };


  return (
    <>
      <h3 className="text-center mt-5">Welcome to INotebook</h3>
      <div className="d-flex justify-content-center mt-2">
        <div className="col-md-6">
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={credentials.name} name="name" onChange={onChange} placeholder="Your name here..." />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" value={credentials.email} name="email" onChange={onChange} placeholder="Your email here..." />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder='Password here...' />
            </div>
            <button className='btn btn-success btn-sm mt-2' >Register</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register
