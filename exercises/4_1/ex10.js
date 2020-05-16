let custoDoProduto = 100;
let valorDeVenda = 300;
let imposto = 0.2;
let lucro = valorDeVenda - (custoDoProduto - (custoDoProduto * imposto))

if (custoDoProduto > 0 && valorDeVenda > 0) {
    console.log(lucro)
} else {
    console.log("Algum dos valores indicados é inválido por ser menor que zero.")
}