import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex justify-content-between">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <img src="./images/logo.png" alt="LogoCar" class="logo" />
                    </div>
                    <div className="collapse navbar-collapse justify-content-end">
                        <div className="navbar-nav d-flex flex-row align-items-center">
                          <li class="nav-link" href="#service-section">Our Services<span class="sr-only"></span></li>
                          <li class="nav-link" href="#Why-us">Why Us</li>
                          <li class="nav-link" href="#testimonial-section">Testimonial</li>
                          <li class="nav-link" href="#FAQ">FAQ</li>
                          <form class="form-inline my-2 my-lg-0">
             <button class="btn btn-success my-2 my-sm-0" type="submit">Register</button>
            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav> */}
        <header id="header">
        <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <img src="./images/logo.png" alt="LogoCar" className="logo" />
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