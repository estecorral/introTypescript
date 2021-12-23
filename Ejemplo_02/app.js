"use strict";
(function () {
    var mensaje = 'let';
    var mensaje2 = 'var';
    var constante = 'Este valor no deberia cambiar';
    if (true) {
        var mensaje_1 = 'let 2';
        mensaje2 = 'Cambiamos el var';
    }
    console.log(mensaje);
})();
