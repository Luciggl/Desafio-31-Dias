// 🚀 Exercícios Práticos
// 1 Reescreva a função abaixo, aplicando o princípio de DRY:
// function calcularImposto10(valor) {
//   return valor * 0.1;
// }

// function calcularImposto20(valor) {
//   return valor * 0.2;
// }

function calcularImposto(valor, porcentagem) {
    return valor * (1 + porcentagem / 100)
}

console.log(calcularImposto(10, 10))

// 2 Refatore o código a seguir para que as funções sejam menores e mais claras:

// function calcularFrete(valor, distancia) {
//   const frete = distancia * 2;
//   const total = valor + frete;
//   console.log(`O frete é: ${frete}`);
//   console.log(`O total é: ${total}`);
//   return total;
// }

function calcularFrete(distancia) {
    const frete = distancia * 2
    console.log(`O frete é: ${frete}`)
    return frete
}

function calcularValorTotal(valor, frete) {
    const total = valor + frete;
    console.log(`O total é: ${total}`)
    return total;
}

let frete = calcularFrete(20);
let total = calcularValorTotal(2000, frete)


// 3 Identifique e substitua os "números mágicos" no código abaixo:
// if (idade >= 18) {
//   console.log("Maior de idade.");
// }

const IDADE_MINIMA = 18;
const idade = 19

if (idade => IDADE_MINIMA) {
    console.log("Maior de Idade.");
}

//  3 Transforme os comentários ruins em boas práticas no código abaixo:
// Verifica se o usuário é admin
// if (usuario.permissao === "admin") {
//   console.log("Acesso liberado.");
// }

const PERMISSAO_ADMIN = "admin";

if (usuario?.permissao === PERMISSAO_ADMIN) {
    console.log("Acesso liberado para o administrador.");
} else {
    console.log("Acesso negado: permissão insuficiente.")
}

// 4 Refatore o seguinte código para melhorar os nomes de variáveis:
// let x = 100;
// let y = 50;
// console.log(x - y);

let valorInicial = 100;
let valorDesconto = 50;
console.log(`Subtração: ${valorInicial - valorDesconto}`)

// Separe as responsabilidades em funções menores:
// function processarPedido(pedido) {
//   const total = pedido.quantidade * pedido.preco;
//   console.log(`Pedido processado: ${total}`);
// }

function calcularTotal(quantidade, preco) {
    return quantidade * preco;
}

function exibirTotal(total) {
    console.log(`Pedido processado: ${total}`);
}

function processarPedido(pedido) {
    const total = calcularTotal(pedido.quantidade, pedido.preco);
    exibirTotal(total);
}

const pedido = { quantidade: 3, preco: 50 };
processarPedido(pedido);