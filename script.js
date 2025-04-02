function generarPares() {
    let pares = [];
    let array = []; 
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            array.push(i); 
        }
    }
    alert("Los 100 primeros números pares son:" + " " + array.join(" - "));
}
