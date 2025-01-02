// ### **🎯 Exercícios Práticos**

// Agora é a sua vez! 💪 Resolva os exercícios abaixo:

// 1. Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".

let nome = "Luciélio";
let idade = 22;

console.log(`meu nome é ${nome} e tenho ${idade} anos`);

// 2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let precoProduto = 250.00;
let desconto = 0.10;

var resultado = precoProduto -= (precoProduto * desconto);

console.log(`Preço inicial R$: ${precoProduto}
Desconto de: ${desconto * 100}
Preço final: ${resultado}`);

// 3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.

const comidas = ["Arroz", "Feijão", "Batata"];
console.log(comidas[1]);

// 4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
const livro = {
    titulo: "A Pantera cor de Rosa",
    autor: "Antoin Juvino",
    ano: 1981
}

console.log(`${livro.titulo} por ${livro.autor}`)
// 5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".

let estaLogado = false;

estaLogado = true;
console.log(`Status de login: ${estaLogado}`);

// 6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

const PI = 3.14;
let areaCirculo = PI * (5**2);
console.log(areaCirculo);