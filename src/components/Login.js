import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const API_URL = process.env.REACT_APP_API_URL,
        navigate = useNavigate(),
        [credentials, setCredentials] = useState({
            email: "",
            password: ""
        });


    const handleForm = async (e) => {
        e.preventDefault();
        let response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        });

        response = await response.json();

        if (response.status === 'success') {
            localStorage.setItem("auth-token", response.token);
            props.setAlert("User logged in successfully!", 'success');
            navigate("/");
        }
        else
            props.setAlert("Invalid Credentials!", "danger");


    };


    // On Change
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={credentials.email} name="email" onChange={onChange} placeholder="Email here..." />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder='Password here...' />
                        </div>
                        <button className='btn btn-success btn-sm mt-2' >Login</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
