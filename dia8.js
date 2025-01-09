// ### **🎯 Exercícios Práticos**

// 1. Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.

const matriz = [];
let contador = 1;

for (let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(contador++);
    }
    matriz.push(linha);
}

console.log(matriz)

// 2. Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.

const somaMatriz = (matrizBase) => {
    let soma = 0
    for (let i = 0; i < matrizBase.length; i++) {
        for (let j = 0; j < matrizBase[i].length; j++) {
            soma += matrizBase[i][j];
        }
    }
    return soma
}

console.log(somaMatriz(matriz))

// 3. Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".

const criarTabulerio = () => {
    let tabuleiro = ''
    for (let i = 0; i < 8; i++) {
        let linha = ''
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                linha += '⬜'
            } else {
                linha += '⬛'
            }
        }
        tabuleiro += linha + "\n";
    }
    return tabuleiro;
};

console.log(criarTabulerio())

// 4. Verifique quantos números em uma matriz são pares.
// 5. Substitua todos os valores maiores que 10 em uma matriz por `0`.
// 6. Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.