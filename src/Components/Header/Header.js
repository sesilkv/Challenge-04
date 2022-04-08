import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <div>
        <section id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 col-md-5 home-desc">
                            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div className="col-12 col-lg-6 col-md-7">
                            <img src="./images/Car.png" alt="Car" className="home-image"/>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Header