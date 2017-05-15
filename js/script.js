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


$("#tiny").hover(function() {
    $(this).attr("src", "img/tinygif.gif");

    $("body").css( {"background-image": 'url("img/tinygif.gif")' } );
}, function() {
    $(this).attr("src", "img/tiny.png");
    $("body").css( { "background-image": "none" });
});

$("#rocket").hover(function() {
    $(this).attr("src", "img/rocketgif.gif");

    $("body").css( {"background-image": 'url("img/rocketgif.gif")' } );
}, function() {
    $(this).attr("src", "img/rocket.jpg");
    $("body").css( { "background-image": "none" });
});


$("#doom").hover(function() {
    $(this).attr("src", "img/doomgif.gif");

    $("body").css( {"background-image": 'url("img/doomgif.gif")' } );
        
}, function() {
    $(this).attr("src", "img/doom.jpg");
    $("body").css( { "background-image": "none" });
});