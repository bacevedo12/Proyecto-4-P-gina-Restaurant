import React from 'react'

const FooterRestaurant = () => {
    return (
      <div>
            <footer className="text-white py-4">
                <nav className="row justify-content-around align-items-center contenedorFooter"> 
                    <div className="col-xs-12 col-lg-3">
                    <img className="imagenLogo"alt="logo"src='../images/logo-restaurant.jpg' />
                    </div>
                    <div className='col-xs-12 col-lg-3'>
                        <h3>Dirección</h3>
                        <p>Av.Costanera 4358, Tomé </p>
                        <button className="btnicono me-4"><i class="fa-brands fa-square-instagram"></i></button>
                        <button className="btnicono"><i class="fa-brands fa-facebook"></i></button>
                    </div>
                    <div className='col-xs-12 col-lg-3'>
                        <h3>Contacto</h3>
                        <p>Telefono: 41-35467498 - 9-82386395</p>
                        <p>puerto_sirena@gmail.com</p>
                    </div>
                  
                  <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p class="text-center text-muted">© 2022 by Barbara y Camila</p>
                  </div>
                </nav>

            </footer>
        </div>
    );
  }
  
  export default FooterRestaurant;
