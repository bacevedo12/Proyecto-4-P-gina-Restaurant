import React from 'react'

const FooterRestaurant = () => {
    return (
      <div>
            <footer className="text-white py-4">
                <div className='contaniner'>
                <nav className='row'>  
                  <div className="d-flex flex-row justify-content-around contenedorFooter">
                    <div>
                        <img src='./logo-restaurant.jpg' className="imagenLogo" />
                    </div>
                    <div >
                        <h3>Dirección</h3>
                        <p>Av.Costanera 4358, Tomé </p>
                        <button className="btnicono me-4"><i class="fa-brands fa-square-instagram"></i></button>
                        <button className="btnicono"><i class="fa-brands fa-facebook"></i></button>
                    </div>
                    <div>
                        <h3>Contacto</h3>
                        <p>Telefono: 41-35467498 - 9-82386395</p>
                        <p>puerto_sirena@gmail.com</p>
                    </div>
                  </div> 
                  <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p class="text-center text-muted">© 2022 by Barbara y Camila</p>
                  </div>
                </nav>
                </div>
            </footer>
        </div>
    );
  }
  
  export default FooterRestaurant;
