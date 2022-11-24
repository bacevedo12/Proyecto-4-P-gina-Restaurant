import ceviche from '../components/imagenes/ceviche.jpg'
import pailaMarina from '../components/imagenes/paila-marina.jpg'
import machaParmesana from '../components/imagenes/machas.parmesana.jpg'
import chupeJaiba from '../components/imagenes/chupe.jaiba.jpg'
import locos from '../components/imagenes/locos.mayo.jpg'
import camaronesPilpil from '../components/imagenes/camarones_al_pilpil.png'

function ControlledCarousel() {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner justify-content-center ">
    <div className="carousel-item active">
      <img src={ceviche} className= "imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pailaMarina} className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={machaParmesana} className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={chupeJaiba} className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={locos} className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={camaronesPilpil} className="imag-responsive center-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default ControlledCarousel;