/*******************
 *  DECLARACIONES  *
 *******************/

// Activa la barra de scroll para la columna derecha de la ficha (https://github.com/buzinas/simple-scrollbar)
var contenidoFichaDcha = document.querySelector('.contenido-ficha-dcha');
SimpleScrollbar.initEl(contenidoFichaDcha);

/* Indica si la imagen del slider ha sido clicada. Se usa para abrir la ficha */
var clicked = false;


/*************
 *  EVENTOS  *
 *************/

/* Eventos para cambiar la imagen y el fondo por un gif */
$(".imagen-juego").hover(function () {
    var juego = $(this).attr("id");

    /* Recorre el array de rutas buscando el id del elemento sobre el que se ha hecho hover */
    for (var i = 0; i < rutasImagenes.length; i++) {
        /* Al encontrar el id del juego, pausa el slider y cambia el fondo y la imagen */
        if (juego === rutasImagenes[i][0]) {
            pausar($(this), i);

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


/*  Eventos para abrir y cerrar la ficha */
$(".imagen-juego, .abrir").click(function () {
    var juego = $(this).attr("id");

    /* Recorre el array de rutas buscando el id del elemento sobre el que se ha hecho clic */
    for (var i = 0; i < fichas.length; i++) {
        /* Al encontrar el id del juego, pausa el slider y cambia el fondo y la imagen */
        if (juego === fichas[i]["id"]) {
            abrirFicha($(this), i);

            $("#boton-cerrar").click(function () {
                cerrarFicha($(this), i);
            })

            break;
        }
    }
});




/***************
 *  FUNCIONES  *
 ***************/

/* Para la animación del slider y pone de fondo el gif del juego */
function pausar(elemento, i) {
    /* Para el slider */
    $(".caja").css({ "animation-play-state": "paused" });

    /* Cambia la imagen del elemento por un gif */
    elemento.attr("src", rutasImagenes[i][2]);

    /* Pone el gif de fondo*/
    $("body").css({ "background-image": 'url(' + rutasImagenes[i][2] + ')' });
}

/* Devuelve el slider a su estado inicial y continua la animación */
function reiniciar(elemento, i) {
    /* Vuelve a poner el slider en funcionamiento */
    $(".caja").css({ "animation-play-state": "running" });

    /* Pone la imagen original al elemento */
    elemento.attr("src", rutasImagenes[i][1]);

    /* Pone el fondo original */
    $("body").css({ "background-image": 'url("img/fondo.jpg")' });
}



/* Abre la ficha del juego seleccionado (fichas[i]) */
function abrirFicha(elemento, i) {
    clicked = true;

    pausar(elemento, i);

    $("#ficha").fadeIn("fast");

    rellenarFicha();

    function rellenarFicha() {
        establecerTitulo();
        establecerPlataformas();
        establecerPortada();
        establecerBotonLeer();
        establecerPuntuacion();
        establecerPegi();
        establecerDesarrollador();
        establecerGenero();
        establecerPrecio();
        establecerFechaLanzamiento();
        establecerDescripcion();
        establecerMiniaturas();

        function establecerTitulo() {
            /* Rellena el título de la ficha */
            $(".titulo-ficha div h3").text(fichas[i]["titulo"]);
        }

        function establecerPlataformas() {
            /* Recorre el array de plataformas de la ficha y adjunta sus iconos a la ficha */
            for (var j = 0; j < fichas[i]["plataformas"].length; j++) {
                $(".iconos-plataformas").append('<img src="' + fichas[i]["plataformas"][j] + '">');
            }
        }

        function establecerPortada() {
            /* Pone la portada a la ficha */
            $(".portada-ficha").attr("src", fichas[i]["portada"]);
        }

        function establecerBotonLeer() {
            $("#boton-leer").attr("href", fichas[i]["opinion"]);

            /* Evento para ir a la opinión */
            $("#boton-leer").click(function () {
                var juego = $(this).attr("id");

                /* Recorre el array de rutas buscando el id del elemento sobre el que se ha hecho clic */
                for (var i = 0; i < fichas.length; i++) {
                    /* Al encontrar el id del juego, pausa el slider y cambia el fondo y la imagen */
                    if (juego === fichas[i]["id"]) {
                        abrirFicha(elemento, i);

                        $("#boton-cerrar").click(function () {
                            cerrarFicha(elemento, i);
                        })

                        break;
                    }
                }
            });
        }

        function establecerPuntuacion() {
            /* Pone la puntuación a la ficha */
            $("#puntuacion").text(fichas[i]["puntuacion"]);

            /* Pone el color de fondo dependiendo de su nota */
            if (fichas[i]["puntuacion"] < 5) {
                $("#puntuacion").css({ "background-color": "lightcoral" });
            } else if (fichas[i]["puntuacion"] >= 5 && fichas[i]["puntuacion"] <= 6) {
                $("#puntuacion").css({ "background-color": "orange" });
            } else {
                $("#puntuacion").css({ "background-color": "#009A76" });
            }
        }

        function establecerPegi() {
            $(".pegi").attr("src", fichas[i]["pegi"]);
        }

        function establecerDesarrollador() {
            $("#desarrollador").text(fichas[i]["desarrollador"]);
        }

        function establecerGenero() {
            $("#genero").text(fichas[i]["genero"]);

        }

        function establecerPrecio() {
            $("#precio").text(fichas[i]["precio"]);

        }

        function establecerFechaLanzamiento() {
            $("#fecha-lanzamiento").text(fichas[i]["fecha"]);
        }

        function establecerDescripcion() {
            /* Recorre el array de descripcion de la ficha y adjunta sus párrafos a la ficha */
            for (var j = 0; j < fichas[i]["descripcion"].length; j++) {
                $("#descripcion").append('<p>' + fichas[i]["descripcion"][j] + '</p>');
            }
        }

        function establecerMiniaturas() {
            /* Recorre el array de miniaturas de la ficha y adjunta sus imagenes a la ficha */
            for (var j = 0; j < fichas[i]["miniaturas"].length; j++) {
                $("#miniaturas").append('<img class="miniatura" src="' + fichas[i]["miniaturas"][j] + '">');
            }

            /* Eventos para abrir y cerrar las imágenes */
            /* Abre la imagen al clicar en la miniatura */
            $(".miniatura").click(function () {
                var miniatura = $(this).attr("src");

                abrirImagen(miniatura);
            });

            /* Cierra la imagen al clicar en el botón de cierre*/
            $(".cerrar-imagen").click(function () {
                cerrarImagen()
            });

            function abrirImagen(miniatura) {
                $(".contenedor-ampliable").append('<img class="ampliable" src="' + miniatura + '">');
                $(".contenedor-relativo").slideDown("fast");
            }

            function cerrarImagen() {
                $(".contenedor-relativo").slideUp("fast");
            }
        }
    }
}



function cerrarFicha(elemento, i) {
    clicked = false;

    $("#ficha").slideUp("fast", "linear");

    reiniciar(elemento, i);

    /* Vacía algunos elementos de la ficha */
    $(".iconos-plataformas").empty();
    $("#descripcion").empty();
    $("#miniaturas").empty();
}