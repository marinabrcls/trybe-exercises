let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(array) {
    let menorNumero = array[0];
    let indice = 0;

    for (i = 0; i < array.length; i += 1) {
        if (array[i] < menorNumero) {
            menorNumero = array[i];
            indice = i;
        }
    }
    return indice;
}

console.log(indiceMenorValor(arrayTeste))