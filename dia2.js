// ### **🎯 Exercícios Práticos**

// 1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.

let hora;

hora = 4;
if (hora >= 6 && hora <= 12) {
    console.log("Bom Dia")
}
if (hora > 12 && hora <= 18) {
    console.log("Boa Tarde")
}
console.log("Boa noite")

// 2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

let mes;

mes = 3;

switch (mes) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
    default:
        console.log("Opção Invalida!!")
}

// 3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".

let idade = 18;
let respostaIdade = idade >= 18 ? "Pode dirigir" : "Não pode dirigir"
console.log(respostaIdade)


// 4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = 0;
let respostaSaldo = saldo >= 0 ? "Saldo positivo" : "Saldo negativo"
console.log(respostaSaldo)

// 5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".

classificarNumeros = (numero) => {
    if (numero > 0) console.log("Positivo");
    if (numero < 0) console.log("negativo");
    if (numero == 0) console.log("Zero")
}

classificarNumeros(3)

// 6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.

let operacao

operacao = 1

switch (operacao) {
    case 1:
        console.log("Sacar")
        break
    case 2:
        console.log("Depositar")
        break
    case 3:
        console.log("Saldo")
        break
    default:
        console.log("Operação invalida")
}
