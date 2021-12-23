(()=>{
    function suma (num1: number, num2: number, num3 = 15, num4?: number) {
        if(num4) {
            return num1 + num2 + num3 + num4;
        } else {
            return num1 + num2 + num3;
        }
    }
    console.log('SUMA de tres números, sin enviar num3', suma(2, 3));
    console.log('SUMA de 3 números: ', suma(2, 3, 5));
    console.log('SUMA de 4 números: ', suma(2, 3, 10, 5));

    function tortillaPatata(ing1: string, ing2?: string, ing3 = 'Huevo') {
        if(ing2) {
            console.log('Ingredientes de la Tortilla: ' + ing1 + ' ' + ing2 + ' ' + ing3);
            console.log(`Ingredientes de la Tortilla: 
            ${ ing1 } 
            ${ ing2 } 
            ${ ing3 }`);
        }
    }

    tortillaPatata('Patata', 'Cebolla', 'Huevina');
})()