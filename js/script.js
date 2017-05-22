/* Eventos para mostrar y ocultar el submenu en hover y click */

$(".menu-principal > li").hover(function () {
    $(this).children(".submenu").slideDown("fast");
}, function () {
    $(this).children(".submenu").slideUp("fast");
});


$(".menu-principal > li").click(function () {
    $(this).children(".submenu").slideToggle("fast");
});



var rutasImagenes = [
    ["life-strange", "img/life-strange.jpg", "img/life-strange.gif"],
    ["doom", "img/doom.jpg", "img/doomgif.gif"],
    ["tiny", "img/tiny.png", "img/tinygif.gif"],
    ["rocket", "img/rocket.jpg", "img/rocketgif.gif"]
];

var fichas = [
    {
        id: "life-strange", // #id
        titulo: "Life is Strange", // Título

        /* PLATAFORMAS */

        portada: "img/life-strangecaratula.jpg", // Portada
        pegi: "img/16.gif", // PEGI
        desarrollador: "DONTNOD Entertainment", // Desarrollador
        genero: "Aventura", // Género
        precio: "19,99€", // Precio
        fecha: "30-1-2015", // Fecha

        /* DESCRIPCION */
        descripcion: "Sigue la historia de Max Caulfield, una estudiante de fotografía que descubre que es capaz de retroceder en el tiempo al salvar a su mejor amiga, Chloe Price." +
        "Juntas comienzan a investigar la misteriosa desaparición de otra estudiante, Rachel Amber, y pronto descubren el lado más oscuro de Arcadia Bay. Max debe aprender cuanto antes que cambiar el pasado a veces puede traer consecuencias desastrosas en el futuro.",

        /* MINIATURAS */
        miniatura1: "img/life-strange-miniatura1.jpg",
        miniatura2: "img/life-strange-miniatura2.jpg",
        miniatura3: "img/life-strange-miniatura3.jpg",
        miniatura4: "img/life-strange-miniatura4.jpg",
    },

    {
        id: "doom", // #id
        titulo: "Doom", // Título

        /* PLATAFORMAS */

        portada: "img/doomcaratula.jpg", // Portada
        pegi: "img/18.gif", // PEGI
        desarrollador: "Id Software", // Desarrollador
        genero: "First Person Shooter", // Género
        precio: "59,99€", // Precio
        fecha: "13-5-2016", // Fecha

        /* DESCRIPCION */
        descripcion: "DOOM, desarrollado por id Software, estudio pionero en el género de los shooters en primera persona y creador de las partidas multijugador en formato Deathmatch, regresa una vez más como un moderno shooter repleto de diversión y desafíos.",

        /* MINIATURAS */
        miniatura1: "img/doom-miniatura1.jpg",
        miniatura2: "img/doom-miniatura2.jpg",
        miniatura3: "img/doom-miniatura3.jpg",
        miniatura4: "img/doom-miniatura4.jpg",
    },
    ["tiny", "img/tiny.png", "img/tinygif.gif"],
    ["rocket", "img/rocket.jpg", "img/rocketgif.gif"]
]

/* Indica si la imagen del slider ha sido clicada */
var clicked = false;




/* EVENTOS PARA HOVER */
$(".imagen-juego").hover(function () {
    var juego = $(this).attr("id");

    /* Recorre el array de rutas buscando el id del elemento sobre el que se ha hecho hover */
    for (var i = 0; i < rutasImagenes.length; i++) {
        /* Al encontrar el id del juego, pausa el slider y cambia el fondo y la imagen */
        if (juego === rutasImagenes[i][0]) {
            $(".caja").css({ "animation-play-state": "paused" });
            $(this).attr("src", rutasImagenes[i][2]);

            $("body").css({ "background-image": 'url(' + rutasImagenes[i][2] + ')' });

            break;
        }
    }
    /* Función que se ejecuta al retirar el hover del elemento */
}, function () {
    var juego = $(this).attr("id");

    /* Evita que se ejecute si el elemento ha sido clicado */
    if (!clicked) {
        for (var i = 0; i < rutasImagenes.length; i++) {
            if (juego === rutasImagenes[i][0]) {
                reiniciar($(this), i);

                break;
            }
        }

    }
});

/* Devuelve el slider a su estado inicial y continua la animación */
function reiniciar(elemento, i) {
    $(".caja").css({ "animation-play-state": "running" });
    elemento.attr("src", rutasImagenes[i][1]);
    $("body").css({ "background-image": 'url("img/fondo.jpg")' });
}






/*  FUNCIONES PARA ABRIR Y CERRAR FICHA */
$(".imagen-juego").click(function () {
    var elemento = $(this);

    var juego = $(this).attr("id");

    /* Recorre el array de rutas buscando el id del elemento sobre el que se ha hecho clic */
    for (var i = 0; i < fichas.length; i++) {
        /* Al encontrar el id del juego, pausa el slider y cambia el fondo y la imagen */
        if (juego === fichas[i]["id"]) {
            abrirFicha(elemento, i);

            $(".boton-cerrar").click(function () {
                cerrarFicha(elemento, i);
            })

            break;
        }
    }





});


function abrirFicha(elemento, i) {
    clicked = true;

    $("#ficha").fadeIn("fast", "linear");
    $(".caja").css({ "animation-play-state": "paused" });
    $("body").css({ "background-image": 'url(' + rutasImagenes[i][2] + ')' });

    /* Rellena la ficha */
    $(".titulo-ficha div h3").text(fichas[i]["titulo"]);
    $(".portada-ficha").attr("src", fichas[i]["portada"]);
    $(".pegi").attr("src", fichas[i]["pegi"]);
    $("#desarrollador").text(fichas[i]["desarrollador"]);
    $("#genero").text(fichas[i]["genero"]);
    $("#precio").text(fichas[i]["precio"]);
    $("#fecha-lanzamiento").text(fichas[i]["fecha"]);
    $("#descripcion").text(fichas[i]["descripcion"]);
    $("#miniatura1").attr("src", fichas[i]["miniatura1"]);
    $("#miniatura2").attr("src", fichas[i]["miniatura2"]);
    $("#miniatura3").attr("src", fichas[i]["miniatura3"]);
    $("#miniatura4").attr("src", fichas[i]["miniatura4"]);
}


function cerrarFicha(elemento, i) {
    clicked = false;

    $("#ficha").fadeOut("fast", "linear");
    $(".caja").css({ "animation-play-state": "running" });
    $("body").css({ "background-image": 'url("img/fondo.jpg")' });

    elemento.attr("src", rutasImagenes[i][1]);
}
