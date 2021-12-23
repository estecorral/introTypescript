(()=> {
    class Coche {
        constructor(
            public marca: string,
            public modelo: string,
            public color: string,
            public puertas: number,
            private matricula = 'HHH1234',
        ){}
    }

    const miCoche = new Coche('Opel', 'Tigra', 'Negro', 2);
    console.log(miCoche);
})()