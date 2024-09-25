const footer_placeholder = document.getElementById("footer-placeholder")
const navBar = document.getElementById("navBar")


function loadFooter() {
    footer_placeholder.insertAdjacentHTML("afterbegin",
        `
        <div class="container">
        
        <div class="container row-cols-4 text-center">
    <a class="btn btn-primary botones"  href="./formularioCreacion.html" role="button">Agregar producto</a>
    </div>
            <h3 id="redesFooter">Redes sociales</h3>
            <div class="containerFooter">
                <a href="#" class="iconsFooter">
                    <i class="bi bi-facebook"></i>
                </a>

                <a href="#" class="iconsFooter">
                    <i class="bi bi-instagram"></i>
                </a>

                <a href="#" class="iconsFooter">
                    <i class="bi bi-twitter-x"></i>
                </a>
                
                <a href="#" class="iconsFooter">
                    <i class="bi bi-tiktok"></i>
                </a>
            </div>
            <i class="bi bi-c-circle" id="derechosFooter"> 2024 Genereishop. Todos los derechos reservados. </i> 
        </div>
    `)
}

function loadNavbar() {
   navBar.insertAdjacentHTML("afterbegin", `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" style="background-color: #404866">
        <div id="header" class="container-fluid">
            <header>
                <h3>GenereiShop</h3>
            </header>
        </div>
        <a class="navbar-toggler" href="./index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor"
                class="bi bi-house" viewBox="0 0 16 16">
                <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
        </a>
         <style>
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23E5EBD2'%3e%3cpath fill-rule='evenodd' d='M1.5 12.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13z'/%3e%3c/svg%3e");
        }
        </style>  
        <!-- Falta color claro en las lineas de la hamburguesa... no se ha logrado cambiar hasta el momento, solo el fondo -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./listaDeProductos.html">Productos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="./contactenos.html">Contactenos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="./nosotros.html">Nosotros</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-search"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-person"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-cart"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-question-circle"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    `)
}



loadNavbar()

loadFooter();

