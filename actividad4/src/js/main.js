// llamamos a los contenedores donde vamos a meter el codigo
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

// ingresamos el header de la pagina
header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-custom">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold " href="#">PetLove</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ingresar Usuario</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    consultar
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">consultar mascota</a></li>
                        <li><a class="dropdown-item" href="#">consultar propietario</a></li>
                        <!-- <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Modificar usuario</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
    </nav>
`
header.classList.add('position-fixed')
header.style.width = '100%';
// ingresamos el footer de la pagina 
footer.innerHTML = `
<footer class="bg-custom text-center position-fixed bottom-0 start-0" style="width: 100%;">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
        <!-- Section: Form -->
        <section class="">
        <form action="">
            <!--Grid row-->
            <div class="row d-flex justify-content-center">
            <!--Grid column-->
            <div class="col-auto">
                <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
                </p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-5 col-12">
                <!-- Email input -->
                <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form5Example26" class="form-control" />
                <label class="form-label" for="form5Example26">Email address</label>
                </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-auto">
                <!-- Submit button -->
                <button data-mdb-ripple-init type="submit" class="btn btn-primary mb-4">
                Subscribe
                </button>
            </div>
            <!--Grid column-->
            </div>
            <!--Grid row-->
        </form>
        </section>
        <!-- Section: Form -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2020 Copyright:
        <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
</footer>
`
main.style.width = '100%'
main.style.height = '100vh'
main.classList.add('d-flex', 'justify-content-center',  'align-items-center')
main.innerHTML = `
<div class="jumbotron">
    <h1 class="display-4 fw-bold">PetLove</h1>
    <p class="lead">Comprometidos con la salud y felicidad de tus amigos peludos.</p>
    <hr class="my-4">
    <p>Agenda una cita ya con nuestros especialistas encargados de la salud de tu mascota</p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Agendar cita</a>
    </p>
</div>
`