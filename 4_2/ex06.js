let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeDeImpares = 0;

for (index in numbers) {
    if (numbers[index] %2 !==0) {
        quantidadeDeImpares += 1;
    }
}

if (quantidadeDeImpares > 0) {
    console.log("Foram encontrados " + quantidadeDeImpares + " valores ímpares.")
} else {
    console.log("Nenhum valor ímpar encontrado!")
}