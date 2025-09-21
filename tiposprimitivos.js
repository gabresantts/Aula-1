// 1. Criando um programa que declare variável nome e idade e imprima uma frase:
let nome = prompt(`Digite seu nome: `);
let idade = parseInt(prompt(`Digite sua idade: `));
console.log("olá, meu nome é "+nome+" e tenho "+idade+" anos")

// 2. Criando um programa que atribua variável nome e cidade como string:
let nome = prompt(`Digite seu nome: `);
let cidade = prompt ('Digite a cidade onde você mora: ');
console.log("Meu nome é "+nome+", nascido em "+cidade+"\n")

// 3. Operações matemáticas 
let numero1 = parseInt(prompt('Digite o primeiro número: ')); let numero2 = parseInt(prompt('Digite o segundo número: ')); const soma = numero1+ numero2; const subtracao = numero1 - numero2; const multiplicacao = numero1 * numero2.toFixed(2); const divisao = numero1 / numero2.toFixed(2); console.log(`A soma é ${soma}`); console.log(`A subtracao ${subtracao}`); console.log(`A multiplicacao ${multiplicacao}`); console.log(`A divisao ${divisao}`);

// 4. Cálculo da área do triângulo
const base = 25
const altura = 22

const area = base*altura/2
const resultadoArea = area.toFixed(2)
console.log(`A base do triangulo é : ${base}`);
console.log(`A altura do triangulo é : ${altura}`);
console.log("A área do triângulo é "+area+"\n")

// 5. Calculando a média de 3 notas
let nota1 = parseInt(prompt(`Digite a primeira nota: `));
let nota2 = parseInt(prompt(`Digite a segunda nota: `));
let nota3 = parseInt(prompt(`Digite a terceira nota: `));
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
console.log(`O resultado da média é : ${media}`);

// 6. Produto com desconto

let produto = parseInt(prompt(`Digite o valor do produto:`));
if (produto >= 280) {
    const desconto = 0.15;
    let valorDesconto = produto * desconto;
    let valorFinal = produto - valorDesconto;
    console.log(`O desconto é ${valorDesconto} e o valor final é de ${valorFinal}`);
}

// 7. Calculando o imposto de renda
let salarioBruto = parseInt(prompt("Digite seu salário bruto: "));
let aliquota;

if (salarioBruto <= 2259.20) {
  aliquota = 0; // Isento
} else if (salarioBruto <= 2826.65) {
  aliquota = 0.075; // 7,5%
} else if (salarioBruto <= 3751.05) {
  aliquota = 0.15; // 15%
} else if (salarioBruto <= 4664.68) {
  aliquota = 0.225; // 22,5%
} else {
  aliquota = 0.275; // 27,5%
}

let impostoRenda = (salarioBruto * aliquota).toFixed(2);
let salarioLiquido = (salarioBruto - impostoRenda).toFixed(2);
console.log(`Seu salário bruto é R$${salarioBruto.toFixed(2)}.`);
console.log(`O imposto de renda a ser pago é R$${impostoRenda}.`);
console.log(`Seu salário após o imposto de renda é R$${salarioLiquido}.`);

// 8. Convertendo Real para Doláres
let valorReal = parseInt(prompt("Digite o valor em Reais: "));
const cotaçaoDolar = 5.50;
const taxaCambio = 0.19;
let valorDolar = (valorReal * taxaCambio).toFixed(2);

console.log(`O valor de R$${valorReal.toFixed(2)} convertido para dólares é $${valorDolar}.`);

// 9. Convertendo Celsius para Fahrenheit
var celsius = 27
var Fahrenheit = (celsius*9/5) + 32
console.log("Em Recife faz "+Fahrenheit+"° fahrenheit que é o mesmo que "+celsius+"° celsius."+"\n")

// 10. Calculando IMC
let peso = 65
let alturaPessoa = 1.78
let imc = peso / (alturaPessoa * alturaPessoa)
let resultadoImc = imc.toFixed(2)

console.log("Meu imc é "+resultadoImc+"."+"\n")