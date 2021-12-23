(() => {
    class Vehiculo {
        constructor(
            marca: string,
            modelo: string,
            color: string,
            puertas?: number,
        ){}

        arrancar() {
            console.log('Coche arrancado');
        }
    }

    class Coche extends Vehiculo {
        constructor(
            marca: string,
            modelo: string,
            color: string,
            puertas: number,
            motor: string,
        ){ super(marca, modelo, color, puertas) }
    }

    class Bicicleta extends Vehiculo {
        constructor(
            marca: string,
            modelo: string,
            color: string,
            tipo: string,
            motor: boolean,
        ) {
            super(marca, modelo, color);
        }
    }

    const miVehiculo = new Coche('Opel', 'Tigra', 'Negro', 2, '1.5 Gasoil');
    const miVehiculo2 = new Bicicleta('Orbea', 'Oiz', 'Gris', 'Montaña', false);
    console.log('Mi coche: ', miVehiculo);
    console.log('Mi bici: ', miVehiculo2);
    miVehiculo.arrancar();
})();