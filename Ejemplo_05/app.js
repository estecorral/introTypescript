"use strict";
(function () {
    function suma(num1, num2, num3, num4) {
        if (num3 === void 0) { num3 = 15; }
        if (num4) {
            return num1 + num2 + num3 + num4;
        }
        else {
            return num1 + num2 + num3;
        }
    }
    console.log('SUMA de tres números, sin enviar num3', suma(2, 3));
    console.log('SUMA de 3 números: ', suma(2, 3, 5));
    console.log('SUMA de 4 números: ', suma(2, 3, 10, 5));
    function tortillaPatata(ing1, ing2, ing3) {
        if (ing3 === void 0) { ing3 = 'Huevo'; }
        if (ing2) {
            console.log('Ingredientes de la Tortilla: ' + ing1 + ' ' + ing2 + ' ' + ing3);
            console.log("Ingredientes de la Tortilla: \n            ".concat(ing1, " \n            ").concat(ing2, " \n            ").concat(ing3));
        }
    }
    tortillaPatata('Patata', 'Cebolla', 'Huevina');
})();
