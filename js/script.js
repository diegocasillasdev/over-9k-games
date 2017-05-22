/* Eventos para mostrar y ocultar el submenu en hover y click */

$(".menu-principal > li").hover(function() {
    $(this).children(".submenu").slideDown("fast");
}, function() {
    $(this).children(".submenu").slideUp("fast");
});


$(".menu-principal > li").click(function() {
    $(this).children(".submenu").slideToggle("fast");
});



var rutasImagenes = [
    ["tiny", "img/tinygif.gif"],
    ["rocket", "img/rocketgif.gif"]
];

/* Eventos para cambiar las imagenes por gif en hover */
$(".imagen-juego").hover(function() {
    $(this).attr("id");
});


var clicked = false;


$("#life-strange").hover(function() {
    $(".caja").css( { "animation-play-state": "paused" } );
    $(this).attr("src", "img/life-strange.gif");

    $("body").css( {"background-image": 'url("img/life-strange.gif")' } );
}, function() {
    /* Evita que se ejecute si el elemento ha sido clicado */
    if (!clicked) {
        reiniciar($(this));
    }
});

function reiniciar(elemento) {
    $(".caja").css({"animation-play-state": "running"});
    elemento.attr("src", "img/life-strange.jpg");
    $("body").css( { "background-image": 'url("img/fondo.jpg")' });
}





/*  FUNCIONES PARA CLICK  */ 
$("#life-strange").click(function() {
    var elemento = $(this);

    abrirFicha(elemento);

    $(".boton-cerrar").click(function() {
        cerrarFicha(elemento);
    })
    
});


function abrirFicha(elemento) {
    clicked = true;

    $("#ficha").fadeIn("fast", "linear");
    $(".caja").css( { "animation-play-state": "paused" } );
    $("body").css( { "background-image": 'url("img/life-strange.gif")' } );
}


function cerrarFicha(elemento) {
    clicked = false;

    $("#ficha").fadeOut("fast", "linear");
    $(".caja").css({"animation-play-state": "running"});
    $("body").css( { "background-image": 'url("img/fondo.jpg")' });

    elemento.attr("src", "img/life-strange.jpg");
}













$("#tiny").hover(function() {
    $(".caja").css( { "animation-play-state": "paused" } );
    $(this).attr("src", "img/tinygif.gif");

    $("body").css( {"background-image": 'url("img/tinygif.gif")' } );
}, function() {
    $(".caja").css({"animation-play-state": "running"});
    $(this).attr("src", "img/tiny.png");
    $("body").css( { "background-image": 'url("img/fondo.jpg")' });
});

$("#rocket").hover(function() {
    $(".caja").css( { "animation-play-state": "paused" } );
    $(this).attr("src", "img/rocketgif.gif");

    $("body").css( {"background-image": 'url("img/rocketgif.gif")' } );
}, function() {
    $(".caja").css({"animation-play-state": "running"});
    $(this).attr("src", "img/rocket.jpg");
    $("body").css( { "background-image": 'url("img/fondo.jpg")' });
});


$("#doom").hover(function() {
    $(".caja").css( { "animation-play-state": "paused" } );
    $(this).attr("src", "img/doomgif.gif");

    $("body").css( { "background-image": 'url("img/doomgif.gif")' } );
        
}, function() {
    $(".caja").css({"animation-play-state": "running"});
    $(this).attr("src", "img/doom.jpg");
    $("body").css( { "background-image": 'url("img/fondo.jpg")' });
});





