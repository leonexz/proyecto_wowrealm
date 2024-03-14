$(document).ready(function () {
    $(".primary_menu-dropdown, .nav__items").click(function (e) {
        e.stopPropagation();

        // Alternar la visibilidad del menú desplegable
        $(this).children('.nav__dropdown').slideToggle(250);

        // Cambiar la clase mactive solo si el menú está visible
        if ($(this).children('.nav__dropdown').is(':visible')) {
            // Cerrar otros menús desplegables abiertos
            $(".mactive").not(this).children('.nav__dropdown').slideUp(250);
            $(".mactive").not(this).removeClass("mactive");

            $(this).toggleClass('mactive');
        }
    });

    $("html").click(function () {
        // Ocultar todos los menús desplegables y quitar la clase mactive
        $('.mactive').children('.nav__dropdown').slideUp(250);
        $('.mactive').removeClass('mactive');
    });

    $('.nav__dropdown').click(function (e) {
        e.stopPropagation();
    });
});