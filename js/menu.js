/* Eventos para mostrar y ocultar el submenu en hover y click */

$(".menu-principal > li").hover(function () {
    $(this).children(".submenu").stop();
    $(this).children(".submenu").slideDown("fast");
    
}, function () {
    $(this).children(".submenu").stop();
    $(this).children(".submenu").slideUp("fast");
});

