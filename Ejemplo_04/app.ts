(()=>{
    // Función tradicional
    function suma (num1: number, num2: number) {
        return num1 + num2;
    }
    console.log('SUMA: ', suma(15, 25));

    //Función anónima
    let resta = function (num1: number, num2: number) {
        return num1 - num2;
    }

    console.log('RESTA: ', resta(50, 26));

    //Función flecha
    const sumaFlecha = (num1: number, num2: number) => num1 + num2;
    console.log('SUMA Flecha-> ', sumaFlecha(35, 49));
})()