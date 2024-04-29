let userName = document.getElementById('user-name');
let password = document.getElementById('password');
let buttonSubmit = document.getElementById('submit');

const dataBase = {
    admin:{
        nombre:'jcamilo',
        password:'1234'
    }
}

buttonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    let textosCampo = document.querySelectorAll('.text-requerido');
    let textFail = document.querySelector('.texto-login-fail')

    if (userName.value != '' && password.value != '') {
        textosCampo.forEach((elemento)=>{
            elemento.style.display = "none";
        });
        userName.value=''
        password.value=''
    }else{
        textosCampo.forEach((elemento)=>{
            elemento.style.display = "flex";
        });
    }
})

function validarUsuario(dataBase, password, userName) {
    for (const key in dataBase) {
        if (key === userName) {
            return dataBase[key]['password'] === password?  true:false
        }
    }
}
