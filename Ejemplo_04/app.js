"use strict";
(function () {
    // Función tradicional
    function suma(num1, num2) {
        return num1 + num2;
    }
    console.log('SUMA: ', suma(15, 25));
    //Función anónima
    var resta = function (num1, num2) {
        return num1 - num2;
    };
    console.log('RESTA: ', resta(50, 26));
    //Función flecha
    var sumaFlecha = function (num1, num2) { return num1 + num2; };
    console.log('SUMA Flecha-> ', sumaFlecha(35, 49));
})();
