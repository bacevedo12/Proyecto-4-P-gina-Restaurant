
function ControlledCarousel() {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner justify-content-center ">
    <div className="carousel-item active">
      <img src="../images/ceviche.jpg" className= "imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/paila-marina.jpg" className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/machas.parmesana.jpg" className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/chupe.jaiba.jpg" className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/locos.mayo.jpg" className="imag-responsive center-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/platos/platos_fondo/camarones_al_pilpil.png" className="imag-responsive center-block" alt="..."/>
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