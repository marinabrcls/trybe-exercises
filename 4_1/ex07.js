let notaEmPorcentagem = 88;
let notaConceito;

switch (true) {
    case notaEmPorcentagem >= 90 && notaEmPorcentagem <= 100:
        notaConceito = "Conceito A";
        break;
    case notaEmPorcentagem >= 80:
        notaConceito = "Conceito B";
        break;
    case notaEmPorcentagem >= 70:
        notaConceito = "Conceito C";
        break;
    case notaEmPorcentagem >= 60:
        notaConceito = "Conceito D";
        break;
    case notaEmPorcentagem < 60:
        notaConceito = "Conceito F";
        break;
    case notaEmPorcentagem > 100 || notaEmPorcentagem < 0:
        notaConceito = "Não é uma nota válida. Número impossível."
    default:
        notaConceito = "Algo de errado não está certo."
}

console.log(notaConceito);