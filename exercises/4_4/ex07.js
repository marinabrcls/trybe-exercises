arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorValor(array) {
    let maiorNumero = 0;
    let indice = 0;
    for (i = 0; i < array.length; i += 1) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
            indice = i;
        }
    }
    return indice;
}

console.log(maiorValor(arrayTeste))