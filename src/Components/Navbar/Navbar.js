import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header id="header">
        <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <Link to="/"><img src="./images/logo.png" alt="LogoCar" className="logo" /></Link>
                    </div>
                    <div className="menu-sm col-auto d-lg-none"><a href="#header-menu">Menu</a></div>
                    <div className="col-auto d-none d-lg-block">
                        <ul className="header-menu list-group-horizontal">
                            <li className="list-inline-item"><a href="#ourservices">Our Services</a></li>
                            <li className="list-inline-item"><a href="#whyus">Why Us</a></li>
                            <li className="list-inline-item"><a href="#testi">Testimonial</a></li>
                            <li className="list-inline-item"><a href="#faq">FAQ</a></li>
                            <li className="list-inline-item"><a href="#!" className="btn bg-success register">Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar