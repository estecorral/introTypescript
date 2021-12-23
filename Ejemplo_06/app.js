"use strict";
(function () {
    var Coche = /** @class */ (function () {
        function Coche(marca, modelo, color, puertas, matricula) {
            if (matricula === void 0) { matricula = 'HHH1234'; }
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.puertas = puertas;
            this.matricula = matricula;
        }
        return Coche;
    }());
    var miCoche = new Coche('Opel', 'Tigra', 'Negro', 2);
    console.log(miCoche);
})();
