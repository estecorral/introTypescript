"use strict";
(function () {
    var miCoche = {
        modelo: 'Astra',
        marca: 'Opel',
        color: 'Negro',
        puertas: 4,
        cuentaKm: function () {
            console.log('100.000KM');
        }
    };
    var miBici = {
        modelo: 'Oiz',
        marca: 'Orbea',
        color: 'Gris',
        cuentaKm: function () {
            console.log('10.000km');
        }
    };
    console.log('Mi coche: ', miCoche);
    console.log('Mi bici: ', miBici);
    var Coche = /** @class */ (function () {
        function Coche(modelo, marca, color, puertas) {
            this.modelo = modelo;
            this.marca = marca;
            this.color = color;
            this.puertas = puertas;
        }
        Coche.prototype.cuentaKm = function () {
            console.log('500000KM');
        };
        return Coche;
    }());
})();
