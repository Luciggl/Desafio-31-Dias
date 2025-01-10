// ### **🎯 Exercícios Práticos**

// 1. Escreva uma função recursiva que conte de `n` até 0.

const contarDeNaZero = (numero) => {
    if (numero === 0) {
        return console.log("0")
    }
    console.log(numero)
    contarDeNaZero(numero - 1)
}

contarDeNaZero(10)
// 2. Implemente uma função que calcule o fatorial de um número.

const calcularFatorial = (numero) => {
    let resultadoFatorial = 1;
    if (numero === 0) {
        return 1;
    }
    return numero * calcularFatorial(numero - 1)
}

console.log(calcularFatorial(5))

// 3. Crie uma função que some todos os números de um array usando recursão.

const somaRecursao = (array) => {
    if (array.length === 0) {
        return 0;
    }

    return array[0] + somaRecursao(array.slice(1));
}

const array = [1, 9, 2, 5, 6, 23, 4]
console.log(somaRecursao(array))

// 4. Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.
const ehPalindromo = (strng) => {
    strng = strng.toLowerCase();
    if(strng.length <= 1){
        return true
    } if (strng[0] !== strng[strng.length - 1]){
        return false
    }

    return ehPalindromo(strng.slice(1, -1));

}

console.log(ehPalindromo("arara"))
console.log(ehPalindromo("banana"))


// 5. Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.
// 6. Crie uma função que liste todos os arquivos de um diretório usando recursão.