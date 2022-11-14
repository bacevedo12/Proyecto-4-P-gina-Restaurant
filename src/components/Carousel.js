
function ControlledCarousel() {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../images/ceviche.jpg" className="d-block d-flex justify-content-center w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/paila-marina.jpg" className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/machas-parmesana.jpg" className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/erizos.jpg" className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../images/platos/platos_fondo/camarones_al_pilpil.png" className="d-block w-50" alt="..."/>
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