let n = 5;
for (i = 1; i <= n; i += 1) {
    let linhaEspacos = '';
    for (j = n - i; j > 0; j -= 1) {
        linhaEspacos += " ";
    }
let linhaAsteriscos = '';
for (k = n - i; k < n; k += 1) {
    linhaAsteriscos += "*";
}
console.log(linhaEspacos+ linhaAsteriscos);
}