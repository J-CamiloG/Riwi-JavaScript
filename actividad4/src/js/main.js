const header = document.querySelector('header');

header.setAttribute('style', 'width: 140px; height: 100vh;');
header.classList.add('border-end','position-absolute','top-0','bottom-0', 'justify-content-lg-start', 'gap-5', 'py-3', 'mb-4', 'border-bottom', 'flex-column');
header.innerHTML = `
<a href="/" class="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <img class="" width="100px" src="./src/img/logo.png" alt="">
</a>

<ul class="nav nav-pills d-flex justify-content-center align-items-center flex-column">
    <li class="nav-item"><a href="./index.html" class="nav-link active" aria-current="page">Home</a></li>
    <li class="nav-item"><a href="./src/pages/registrar.html" class="nav-link">Register</a></li>
    <li class="nav-item"><a href="./src/pages/consult.html" class="nav-link">Consult</a></li>
    <li class="nav-item"><a href="./src/pages/modify.html" class="nav-link">Modify</a></li>
    <li class="nav-item"><a href="./src/pages/delete.html" class="nav-link">Delete</a></li>
</ul>

`
