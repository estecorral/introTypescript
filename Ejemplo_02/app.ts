(()=>{
    let mensaje = 'let';
    var mensaje2 = 'var';
    const constante = 'Este valor no deberia cambiar';
    if(true) {
        let mensaje = 'let 2';
        mensaje2 = 'Cambiamos el var';
    }
    console.log(mensaje);
})()