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

const somaArray = (listaNumeros) => {
    let soma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        soma += listaNumeros[i]
    }
    return soma;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13]

console.log(somaArray(numeros))

// 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.
const retornarNumerosCaracteres = (texto) => {
    return texto.length
}

console.log(retornarNumerosCaracteres("joão"))