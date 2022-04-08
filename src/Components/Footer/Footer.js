import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMail, FiTwitch } from 'react-icons/fi';
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
            <div className="container">
                <div className="row align-items-flex-start h-100">
                    <div className="col-6 col-md-3">
                        <div className="column">
                            <div className="col-12"><p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p></div>
                            <div className="col-12"><p>binarcarrental@gmail.com</p></div>
                            <div className="col-12"><p>081-233-334-808</p></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="column-menu">
                            <div className="col-12"><p>Our Services</p></div>
                            <div className="col-12"><p>Why Us</p></div>
                            <div className="col-12"><p>Testimonial</p></div>
                            <div className="col-12"><p>FAQ</p></div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 justify-content-flex-start">
                        <p>Connect with Us</p>
                        <div className="d-flex" style={{gap: `5px`}}>
                        <div className="circle-logo mb-3 icon">
                            <FaFacebookF style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FaInstagram style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FaTwitter style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FiMail style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FiTwitch style={{color:`white`}}/>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <p>Copyright Binar 2022</p>
                        <img src="./images/logo.png" alt="LogoCar" className="logo" />
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer