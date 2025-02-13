import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const logoutUser = () => {
        localStorage.removeItem("auth-token");
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ borderBottom: "1px solid #ddd", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ color: "black" }}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link text-dark  active" aria-current="page">Home</Link>
                        <Link to="/about" className="nav-link text-dark">About</Link>
                    </div>
                </div>
                {
                    !localStorage.getItem("auth-token") ?
                        <div>
                            <Link to="/login" className='btn btn-primary mx-1 btn-sm'>Login</Link>
                            <Link to="/register" className='btn btn-primary mx-2 btn-sm'>Register</Link>
                        </div>

                        : <button onClick={logoutUser} type="button" className='btn btn-primary mx-2 btn-sm'>Logout</button>
                }
            </div>
        </nav>
    )
}

export default Navbar
