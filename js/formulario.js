/*******************
 *  DECLARACIONES  *
 *******************/

// Selecciona todos los campos imprescindibles (menos las contraseñas)
var imprescindibles = document.querySelectorAll('.imprescindible');

// Checkbox de novedades
var novedades = document.querySelector('#novedades');

// Selecciona las temáticas
var plataformas = document.querySelectorAll('.tematica');

// Selecciona el select con la juego
var juego = document.querySelector('#juego');

// Selecciona el botón de envío
var enviar = document.querySelector('#enviar');

var borrar = document.querySelector('#reset');

/*************
 *  EVENTOS  *
 *************/

// Añade un Event Listener 'keyup' que llama a la función para comprobar los campos imprescindibles
for (var i = 0; i < imprescindibles.length; i++) {
    imprescindibles[i].addEventListener('keyup', function () { comprobarImprescindible(this); });
}

novedades.addEventListener('click', function () { comprobarNovedades(); });

for (var i = 0; i < plataformas.length; i++) {
    plataformas[i].addEventListener('click', function () { comprobarplataformas(); });
}

juego.addEventListener('change', function () { comprobarjuego(); });

borrar.addEventListener('click', function() { borrarFormulario(); });

/***************
 *  FUNCIONES  *
 ***************/

// Comprueba que todos los campos imprescindibles tienen una longitud mayor que 5
function comprobarImprescindible(campo) {
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