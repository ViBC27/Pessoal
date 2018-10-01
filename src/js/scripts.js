$(document).ready(function () {//Funcao para expandir e recolher o menu lateral esquerdo após clicar
    $('#nav-btn').on('click touchstart', function (e) {
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });
})
