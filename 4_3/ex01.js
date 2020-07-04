let n = 5;
let linhaDeAsteriscos = "";

if (n > 1) {
    for (i = 0; i < n; i += 1) {
        linhaDeAsteriscos += "*";
    }
    for (j = 0; j < n; j += 1) {
        console.log(linhaDeAsteriscos)
    }
} else {
    console.log("O número informado é impossível por ser menor que ou igual a 1.")
}