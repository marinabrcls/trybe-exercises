let salarioBruto = 4000;
let salarioBase;

//Dedução do INSS
if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88;
} else {
    console.log("O valor de Salário Bruto informado é invalido por ser menor que ou igual a zero.")
}

console.log("O valor do salário base (após dedução do INSS) é de: R$" + salarioBase)

//Alíquotas do IR
if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.06) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;

console.log("O valor do salário líquido (após dedução do INSS e IR) é de: R$" + salarioLiquido)