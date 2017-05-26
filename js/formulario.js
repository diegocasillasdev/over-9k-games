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

// Selecciona el mensaje
var mensaje = document.querySelector('#mensaje');

// Selecciona el botón de envío
var enviar = document.querySelector('#enviar');

// Selecciona el botón de borrar
var borrar = document.querySelector('#reset');

// Selecciona el botón de avanzar en el formulario

var labelSiguiente = document.querySelector('#label-siguiente');

// Recorre las fichas y añade una opción al select con los títulos
for (var i = 0; i < fichas.length; i++) {
    $(juego).append('<option class="opcion" value="' + fichas[i]["id"] + '">' + fichas[i]["titulo"] + '</option>');
}

/*************
 *  EVENTOS  *
 *************/

// Añade un Event Listener 'keyup' y 'change' que llama a la función para comprobar los campos imprescindibles
for (var i = 0; i < imprescindibles.length; i++) {
    imprescindibles[i].addEventListener('keyup', function () { comprobarEnviar() });
    imprescindibles[i].addEventListener('change', function () { comprobarEnviar() });
}

nombre.addEventListener('keyup', function () { comprobarNombre(); });

email.addEventListener('keyup', function () { comprobarEmail(); });

novedades.addEventListener('click', function () { comprobarNovedades(); });

juego.addEventListener('change', function () { comprobarJuego(); });

borrar.addEventListener('click', function () { borrarFormulario(); });


/***************
 *  FUNCIONES  *
 ***************/

// Valida que el nombre tenga más de 3 caracteres
function comprobarNombre() {
    if (nombre.value.length === 0) {
        nombre.style.backgroundColor = 'white';
        
        return false;
    } else if (nombre.value.length < 3) {
        nombre.focus();

        nombre.style.backgroundColor = 'lightcoral';

        nombre.nextElementSibling.textContent = "El nombre debe tener más de 3 caracteres";

        return false;
    }

    nombre.style.backgroundColor = 'lightgreen';
    nombre.nextElementSibling.textContent = "";


    return true;
}


// Valida que el email sea una dirección válida con una expresión regular
function comprobarEmail() {
    if (email.value.length === 0) {
        email.style.backgroundColor = 'white';

        return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.focus();

        email.style.backgroundColor = 'lightcoral';

        email.nextElementSibling.textContent = "La dirección no es válida";

        return false;
    }

    email.style.backgroundColor = 'lightgreen';
    email.nextElementSibling.textContent = "";


    return true;
}


// Comprueba si el checkbox de novedades ha sido marcado
function comprobarNovedades() {
    var mensajeNovedades = document.querySelector('.mensaje-novedades');

    if (novedades.checked) {
        mensajeNovedades.style.visibility = 'visible';
    } else {
        mensajeNovedades.style.visibility = 'hidden';
    }
}



// Comprueba si se ha elegido un juego y muestra y oculta el textarea
function comprobarJuego() {
    if (juego.value === "") {
        mensaje.value = "";
        
        mensaje.style.visibility = "hidden";
        mensaje.previousElementSibling.style.visibility = "hidden";

        return false;
    }

    mensaje.style.visibility = "visible";
    mensaje.previousElementSibling.style.visibility = "visible";

    return true;
}


// Comprueba que el mensaje no esté vacío
function comprobarMensaje() {
    if (mensaje.value === "") {
        return false;
    }

    return true;
}


// Devuelve el css al estado original
function borrarFormulario() {
    for (var i = 0; i < imprescindibles.length; i++) {
        imprescindibles[i].value = "";
        imprescindibles[i].style.backgroundColor = 'white';
        imprescindibles[i].nextElementSibling.textContent = "";
        mensaje.style.visibility = "hidden";
        mensaje.previousElementSibling.style.visibility = "hidden";
        enviar.disabled = true;
    }
}


// Comprueba que todos los campos requeridos sean válidos
function comprobarEnviar() {
    if (comprobarNombre() && comprobarEmail() && comprobarJuego() && comprobarMensaje()) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
}