// ### **🎯 Exercícios Práticos**

// 1. Escreva uma função recursiva que conte de `n` até 0.

const contarDeNaZero = (numero) => {
    if(numero === 0){
        return console.log("0")
    }
    console.log(numero)
    contarDeNaZero(numero-1)
}

contarDeNaZero(10)
// 2. Implemente uma função que calcule o fatorial de um número.
// 3. Crie uma função que some todos os números de um array usando recursão.
// 4. Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.
// 5. Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.
// 6. Crie uma função que liste todos os arquivos de um diretório usando recursão.