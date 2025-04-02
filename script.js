function numPares() {
    let numInicio = parseInt(prompt("Ingresa el número inicial:"));
    let numFinal = parseInt(prompt("Ingresa el número final:"));
    let array = [];
    for (let i = numInicio; i <= numFinal; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    alert("Los números pares entre" + " " + numInicio + " " + "y" + " " + numFinal + " " + "son:" + " " + array.join(" - "));
}
