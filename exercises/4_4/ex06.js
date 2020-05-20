function verificaPalindromo(palavra) {
    let palavraInvertida = "";
    for (i = palavra.length-1; i >= 0; i -= 1) {
        palavraInvertida += palavra[i];
    }
    if (palavra === palavraInvertida) {
        return true;
    } else {
        return false;
    }
}


console.log("Arara: " + verificaPalindromo("arara"));
console.log("Desenvolvimento: " + verificaPalindromo("desenvolvimento"));
console.log("Marina: " + verificaPalindromo("marina"));
console.log("Radar: " + verificaPalindromo("radar"));