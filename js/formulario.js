/*******************
 *  DECLARACIONES  *
 *******************/

// Selecciona todos los campos imprescindibles (menos las contraseñas)
var imprescindibles = document.querySelectorAll('.imprescindible');

var nombre = document.querySelector("#nombre");

var email = document.querySelector("#email");

// Checkbox de novedades
var novedades = document.querySelector('#novedades');

// Selecciona las temáticas
var plataformas = document.querySelectorAll('.tematica');

// Selecciona el select con la juego
var juego = document.querySelector('#juego');

// Selecciona el botón de envío
var enviar = document.querySelector('#enviar');

var borrar = document.querySelector('#reset');

// Recorre las fichas y añade una opción al select con los títulos
for (var i = 0; i < fichas.length; i++) {
    $(juego).append('<option class="opcion" value="' + fichas[i]["id"] + '">' + fichas[i]["titulo"] + '</option>');
}

/*************
 *  EVENTOS  *
 *************/

// Añade un Event Listener 'keyup' que llama a la función para comprobar los campos imprescindibles
for (var i = 0; i < imprescindibles.length; i++) {
    imprescindibles[i].addEventListener('keyup', function () { comprobarImprescindible(this); });
}

nombre.addEventListener('keyup', function() { comprobarNombre(); });

email.addEventListener('keyup', function() { comprobarEmail(); });

novedades.addEventListener('click', function () { comprobarNovedades(); });

for (var i = 0; i < plataformas.length; i++) {
    plataformas[i].addEventListener('click', function () { comprobarplataformas(); });
}

juego.addEventListener('change', function () { comprobarjuego(); });

borrar.addEventListener('click', function () { borrarFormulario(); });


/***************
 *  FUNCIONES  *
 ***************/

// Comprueba que todos los campos imprescindibles tienen una longitud mayor que 3
/*function comprobarImprescindible(campo) {
    if (campo.value.length < 5) {
        campo.focus();

        campo.style.backgroundColor = 'lightcoral';

        campo.nextElementSibling.setAttribute('class', 'icon-cross');
        campo.nextElementSibling.textContent = "El campo debe tener más de 5 caracteres";
    } else {
        campo.style.backgroundColor = 'lightgreen';
        campo.nextElementSibling.setAttribute('class', 'icon-checkmark');
        campo.nextElementSibling.textContent = "";
    }
}*/


var nombreCorrecto = false;

function comprobarNombre() {
    nombreCorrecto = false;

    if (nombre.value.length === 0) {
        nombre.style.backgroundColor = 'white';
    } else if (nombre.value.length < 3) {
        nombre.focus();

        nombre.style.backgroundColor = 'lightcoral';

        nombre.nextElementSibling.setAttribute('class', 'icon-cross');
        nombre.nextElementSibling.textContent = "El nombre debe tener más de 3 caracteres";
    } else {
        nombreCorrecto = true;

        nombre.style.backgroundColor = 'lightgreen';
        nombre.nextElementSibling.setAttribute('class', 'icon-checkmark');
        nombre.nextElementSibling.textContent = "";
    }

    comprobarEnviar();
}

var emailCorrecto = false;

function comprobarEmail() {
    emailCorrecto = false;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))  {
        email.focus();

        email.style.backgroundColor = 'lightcoral';

        email.nextElementSibling.setAttribute('class', 'icon-cross');
        email.nextElementSibling.textContent = "La dirección no es válida";
    } else {
        emailCorrecto = true;

        email.style.backgroundColor = 'lightgreen';
        email.nextElementSibling.setAttribute('class', 'icon-checkmark');
        email.nextElementSibling.textContent = "";
    }

    comprobarEnviar();
}


function comprobarNovedades() {
    var mensajeNovedades = document.querySelector('.mensaje-novedades');

    if (novedades.checked) {
        mensajeNovedades.style.visibility = 'visible';
    } else {
        mensajeNovedades.style.visibility = 'hidden';
    }
}



function borrarFormulario() {
    for (var i = 0; i < imprescindibles.length; i++) {
        imprescindibles[i].value = "";
        imprescindibles[i].style.backgroundColor = 'white';
        imprescindibles[i].nextElementSibling.setAttribute('class', '');
        imprescindibles[i].nextElementSibling.textContent = "";
    }
}

function comprobarEnviar() {
    if (!nombreCorrecto || !emailCorrecto) {
        enviar.disabled = true;
    } else {
        enviar.disabled = false;
    }
}