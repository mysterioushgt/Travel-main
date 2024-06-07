/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
function Header() {
  return (
    <>
    {/* <!-- Nav start --> */}
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <div className="container-fluid n">
            <a href="" className="navbar-brand">
                <img src="image/l1.avif" alt="" className="weblogo"/>
                <img src="image/l2.png" alt="" className="moblogo"/>
            </a>
            {/* <!--mobile menu--> */}
            <button className="navbar-toggler" data-bs-target="#a" data-bs-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="a">
                <ul className="navbar-nav text-center ms-auto">
                    <li><Link to ="/" className="nav-link">Home</Link></li>
                    <li><Link to="/book" className="nav-link">Book</Link></li>
                    <li><Link to="/service" className="nav-link">Services</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/register" className="nav-link n1">Register</Link></li>
                </ul>
            </div>

        </div>
        {/* <!--container-fluid end--> */}

    </nav>
    {/* <!-- Nav end --> */}
    </>
  )
}

export default Header