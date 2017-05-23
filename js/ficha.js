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

    $("#ficha").fadeIn("fast");
    $(".caja").css({ "animation-play-state": "paused" });
    $("body").css({ "background-image": 'url(' + rutasImagenes[i][2] + ')' });

    /* Rellena la ficha */
    $(".titulo-ficha div h3").text(fichas[i]["titulo"]);

    /************** Poner plataformas
        $(".plataformas").
    */

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

    $("#ficha").slideUp("fast", "linear");
    $(".caja").css({ "animation-play-state": "running" });
    $("body").css({ "background-image": 'url("img/fondo.jpg")' });

    elemento.attr("src", rutasImagenes[i][1]);
}
