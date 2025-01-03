// ### **🎯 Exercícios Práticos**

// 1. Verifique se um número é maior que 10 e menor que 20.
let numero;

numero = 19

if(numero > 10 && numero < 20){
    console.log(`O numero ${numero} esta entre 10 e 20`)
} else console.log("O numero não atende os requisitos")

// 2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 18;

let resposta = idade >= 16 ? "pode votar" : "Não pode votar"
console.log(resposta)
    

// 3. Use `&&` e `||` para criar um sistema de login onde um usuário pode entrar com email **ou** nome de usuário, mas precisa fornecer uma senha válida.
// 4. Implemente um sistema de notas onde:
//     - Notas >= 90: "Aprovado com A"
//     - Notas >= 70 e < 90: "Aprovado com B"
//     - Notas < 70: "Reprovado".
// 5. Crie uma variável `saldo` e verifique:
//     - Se `saldo > 0`: Mostre "Saldo positivo".
//     - Se `saldo === 0`: Mostre "Sem saldo".
//     - Caso contrário, mostre "Saldo negativo".
// 6. Use o operador `!` para verificar se uma luz está apagada e ligue-a.