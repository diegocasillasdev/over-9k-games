// Sustituye la barra de overflow: auto (https://github.com/buzinas/simple-scrollbar)
var main = document.querySelector('main');
SimpleScrollbar.initEl(main);

// Recorre las fichas y añade al buscador los títulos
for (var i = 0; i < fichas.length; i++) {
    $("#juegos-buscador").append('<option value="' + fichas[i]["titulo"] + '">');
}