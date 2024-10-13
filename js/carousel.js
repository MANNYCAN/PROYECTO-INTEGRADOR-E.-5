const carouselExampleCaptions = document.getElementById("carouselExampleCaptions")

function loadCarousel() {
    carouselExampleCaptions.insertAdjacentHTML("afterbegin",`
        <div class="carousel-indicators">
        
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/Sudaderadm.png" class="rounded mx-auto d-block img_carrusel" alt="Primer artículo de novedad">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div class="carousel-item">
      <img src="./assets/tenisdm3.png" class="rounded mx-auto d-block img_carrusel" alt="Segundo artículo de novedad">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div class="carousel-item">
      <img src="./assets/adidasplayera.png" class="rounded mx-auto d-block img_carrusel" alt="Tercer artículo de novedad">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        `)
    }

    loadCarousel()