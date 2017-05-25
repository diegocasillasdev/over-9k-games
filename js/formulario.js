/*******************
 *  DECLARACIONES  *
 *******************/

// Selecciona todos los campos imprescindibles (menos las contraseñas)
var imprescindibles = document.querySelectorAll('.imprescindible');

// Selecciona las contraseñas
var passwords = document.querySelectorAll('.password');

// Checkbox de novedades
var novedades = document.querySelector('#novedades');

// Selecciona las temáticas
var tematicas = document.querySelectorAll('.tematica');

// Selecciona el select con la nota
var nota = document.querySelector('#nota');

// Selecciona el botón de envío
var enviar = document.querySelector('#enviar');

// Selecciona el botón para borrar los campos requeridos
var resetImprescindibles = document.querySelector('#reset-imprescindibles');



/*************
 *  EVENTOS  *
 *************/

// Añade un Event Listener 'change' que llama a la función para comprobar los campos imprescindibles
for (var i = 0; i < imprescindibles.length; i++) {
    imprescindibles[i].addEventListener('keyup', function() {comprobarImprescindible(this);});
}

// Añade un Event Listener 'change' que llama a la función para comprobar las contraseñas
for (var i = 0; i < passwords.length; i++) {
    passwords[i].addEventListener('keyup', function() {comprobarPasswords();});
}

novedades.addEventListener('click', function() {comprobarNovedades();});

for (var i = 0; i < tematicas.length; i++) {
    tematicas[i].addEventListener('click', function() {comprobarTematicas();});
}

nota.addEventListener('keyup', function() {comprobarNota();});

resetImprescindibles.addEventListener('click', function() {borrarImprescindibles();});


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



// Comprueba que las contraseñas tengan una longitud entre 5 y 10 caracteres alfanúmericos y sean iguales
function comprobarPasswords() {
    for (var i = 0; i < passwords.length; i++) {
        if (comprobarLongitud(passwords[0]) && comprobarAlfanumerico(passwords[0])) {
            passwords[0].style.backgroundColor = 'lightgreen';
            passwords[0].nextElementSibling.setAttribute('class', 'icon-checkmark');
            passwords[0].nextElementSibling.textContent = "";

            if (comprobarIgualdad(passwords)) {
                passwords[1].style.backgroundColor = 'lightgreen';
                passwords[1].nextElementSibling.setAttribute('class', 'icon-checkmark');
                passwords[1].nextElementSibling.textContent = "";
            } else {
                passwords[1].focus();
                passwords[1].style.backgroundColor = 'lightcoral';
                passwords[1].nextElementSibling.setAttribute('class', 'icon-cross');
                passwords[1].nextElementSibling.textContent = "La contraseña no coincide";
            }
        } else {
            passwords[0].focus();
            passwords[0].style.backgroundColor = 'lightcoral';
            passwords[0].nextElementSibling.setAttribute('class', 'icon-cross');
            passwords[0].nextElementSibling.textContent = "Debe contener al menos una letra, un número y 5-10 caracteres";
        }
    }

    function comprobarLongitud(password) {
        if (password.value.length >= 5 && password.value.length <= 10) {
            return true;
        }

        return false;
    }

    // Comprueba mediante una expresión regular que las contraseñas tienen un número y una letra
    function comprobarAlfanumerico(password) {
        if ((/[0-9]/.test(password.value)) && (/[a-zA-Z]/.test(password.value))) {
            return true;
        }   

        return false;
    }

    function comprobarIgualdad(passwords) {
        if (passwords[0].value === passwords[1].value) {
            return true;
        }
        
        return false;
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



function comprobarTematicas() {
    var tematicasChecked = document.querySelectorAll('.tematica:checked');
    var iconoTematicas = document.querySelector('#icono-tematicas');
    
    if (tematicasChecked.length < 2) {
        iconoTematicas.setAttribute('class', 'icon-cross');
        iconoTematicas.textContent = "Debe seleccionar al menos 2 opciones";
    } else {
        iconoTematicas.setAttribute('class', 'icon-checkmark');
    }
}



function comprobarNota() {
    if (nota.options[nota.selectedIndex].value >= 9) {
        alert("Gracias por su valoración");
    }
}


function borrarImprescindibles() {
    var seguro = prompt("Seguro que quieres borrar los campos requeridos? S/N");

    if (seguro === "S" || seguro === "s") {
        for (var i = 0; i < imprescindibles.length; i++) {
            imprescindibles[i].value = "";
            imprescindibles[i].style.backgroundColor = 'white';
            imprescindibles[i].nextElementSibling.setAttribute('class', '');
            imprescindibles[i].nextElementSibling.textContent = "";
        }
        
        for (var i = 0; i < passwords.length; i++) {
            passwords[i].value = "";
            passwords[i].style.backgroundColor = 'white';
            passwords[i].nextElementSibling.setAttribute('class', '');
            passwords[i].nextElementSibling.textContent = "";
        }
    }
}