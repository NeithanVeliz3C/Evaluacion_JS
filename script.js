function generarPares() {
    let pares = [];
    for (let i = 1; i <= 100; i++) {
      pares.push(i * 2);
    }
    return pares;
}
const primerosCienPares = generarPares();
console.log(primerosCienPares);