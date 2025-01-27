// **🎯 Exercícios Práticos**

// 1. Converta um objeto JavaScript para JSON e exiba a string resultante.

const usuario = {
    nome: "Lucielio",
    idade: 30,
    cidade: "Rio Tinto"
};

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

// 2. Crie um JSON representando uma lista de tarefas com campos como `nome`, `prioridade` e `completo`.

const tarefas = [
    { nome: "Estudar JavaScript", prioridade: "Alta", completo: false },
    { nome: "Fazer compras", prioridade: "Média", completo: false },
    { nome: "Exercícios físicos", prioridade: "Baixa", completo: true }
];

const tarefasJSON = JSON.stringify(tarefas);
console.log(tarefasJSON);


// 3. Simule uma API que retorna um JSON de informações de produtos e leia esses dados.

const produtos = [
    { id: 1, nome: "Produto A", preco: 19.99 },
    { id: 2, nome: "Produto B", preco: 29.99 },
    { id: 3, nome: "Produto C", preco: 39.99 }
];

const apiProdutos = new Promise((resolve) => {
    setTimeout(() => {
        resolve(produtos);
    }, 2000);
});

apiProdutos.then((dados) => {
    console.log("Produtos recebidos da API:");
    console.table(dados);
});


// 4. Use `JSON.parse()` para converter uma string JSON em um objeto e acessar suas propriedades.

const jsonString = '{"nome":"Maria","idade":25,"cidade":"Rio de Janeiro"}';
const pessoa = JSON.parse(jsonString);

console.log(pessoa.nome);
console.log(pessoa.idade); 
console.log(pessoa.cidade); 

// 5. Crie um objeto complexo em JavaScript, transforme-o em JSON e, em seguida, converta de volta para um objeto.

const user = {
    nome: "Carlos",
    idade: 40,
    endereco: {
        rua: "Rua Exemplo",
        cidade: "Fortaleza",
        estado: "CE"
    },
    telefone: ["1234-5678", "9876-5432"]
};
const userJSON = JSON.stringify(user);
console.log(userJSON);

const userDeVolta = JSON.parse(userJSON);
console.log(userDeVolta);

