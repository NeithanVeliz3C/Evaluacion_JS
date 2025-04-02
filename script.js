// funcion del boton
function generarPares() {
    let array = []; //cadena donde se ingresarán los datos (números pares)
    for (let i = 1; i <= 200; i++) { 
        if (i % 2 === 0) { //condición para definir números pares
            array.push(i); 
        }
    }
    alert("Los 100 primeros números pares son:" + " " + array.join(" - "));
}
