//Escreva um programa que defina três números em variáveis no seu começo e retorne true
//se uma das três for ímpar. Caso contrário, ele retorna false.

let primeiroNumero = 13; 
let segundoNumero = 88;
let terceiroNumero = 92;

if ((primeiroNumero %2 !== 0) || (segundoNumero %2 !== 0) || (terceiroNumero %2 !== 0)) {
    console.log(true);
} else {
    console.log(false);
}