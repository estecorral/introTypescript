(()=>{
    interface Vehiculo {
        modelo: string,
        marca: string,
        color: string,
        puertas?: number,
        cuentaKm(): void,
    }

    const miCoche: Vehiculo = {
        modelo: 'Astra',
        marca: 'Opel',
        color: 'Negro',
        puertas: 4,
        cuentaKm() {
            console.log('100.000KM');
        }
    }

    const miBici: Vehiculo = {
        modelo: 'Oiz',
        marca: 'Orbea',
        color: 'Gris',
        cuentaKm() {
            console.log('10.000km');
        }
    }

    console.log('Mi coche: ', miCoche);
    console.log('Mi bici: ', miBici);

    class Coche implements Vehiculo {
        modelo: string;
        marca: string;
        color: string;
        puertas: number;
        constructor(modelo: string, marca: string, color: string, puertas: number) {
            this.modelo = modelo;
            this.marca = marca;
            this.color = color;
            this.puertas = puertas;
        }
        cuentaKm() {
            console.log('500000KM');
        }
    }
})()