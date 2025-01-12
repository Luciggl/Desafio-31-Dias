// ### **🎯 Exercícios Práticos**

// 1. Verifique se um número é maior que 10 e menor que 20.
let numero;

numero = 19

if (numero > 10 && numero < 20) {
    console.log(`O numero ${numero} esta entre 10 e 20`)
} else console.log("O numero não atende os requisitos")

// 2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 18;

let resposta = idade >= 16 ? "pode votar" : "Não pode votar"
console.log(resposta)


// 3. Use `&&` e `||` para criar um sistema de login onde um usuário pode entrar com email **ou** nome de usuário, mas precisa fornecer uma senha válida.

const Usuario = {
    nome: "Lucielio",
    email: "Lucielio@test",
    passWord: "123"
}

let login = "Lucielio"
let senha = "123"

if ((Usuario.nome === login || Usuario.email === login) && Usuario.passWord === senha) {
    console.log("Logado com sucesso");
} else console.log(`O login ${login} não foi encontrado`);

// 4. Implemente um sistema de notas onde:
//     - Notas >= 90: "Aprovado com A"
//     - Notas >= 70 e < 90: "Aprovado com B"
    - Notas < 70: "Reprovado".

let nota = 90;

if (nota >= 90) console.log("Aprovado com A");
if (nota >= 70 && nota < 90) console.log("Aprovado com B")
if (nota < 70) console.log("Reprovado")

// 5. Crie uma variável `saldo` e verifique:
//     - Se `saldo > 0`: Mostre "Saldo positivo".
//     - Se `saldo === 0`: Mostre "Sem saldo".
//     - Caso contrário, mostre "Saldo negativo".

let saldo = -10;

if (saldo > 0) console.log("Saldo positivo")
if (saldo === 0) console.log("Sem Saldo")
if (saldo < 0) console.log("Saldo negativo")

// 6. Use o operador `!` para verificar se uma luz está apagada e ligue-a.

let estaAcesa = false
if (!estaAcesa) estaAcesa = true