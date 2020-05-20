
let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaMaiorNome(array) {   
    let maiorNome = array[0];
    for (index in array) {
        if (array[index].length >= maiorNome.length) {
            maiorNome = array[index];
        }
    }
return maiorNome;
}

console.log(verificaMaiorNome(arrayTeste));