//🎯 Exercícios Práticos
// 1. Crie uma função que calcule o dobro de um número.

const calcularDobroNumero = (numero) => {
    return numero * 2
}

console.log(calcularDobroNumero(9))

// 2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.

const daBoasVindas = (nome) => {
    return `Olá, ${nome} seja Bem Vindo!`
}

console.log(daBoasVindas("João"))

// 3. Crie uma função que receba dois números e retorne o maior deles.

const verificarMaiorNumero = (numero1, numero2) => {
    let maior = numero1 > numero2 ? numero1 : numero2
    return maior
}

console.log(verificarMaiorNumero(10, 8))

// 4. Implemente uma função que calcule a média de três números.

const mediaNumeros = (numero1, numero2, numero3) => {
    let media = (numero1 + numero2 + numero3) / 3
    return media;
}

console.log(mediaNumeros(10, 9, 8))

// 5. Crie uma função que receba um array de números e retorne a soma deles.
// 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.