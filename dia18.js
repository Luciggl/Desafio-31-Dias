// ### **🎯 Exercícios Práticos**

// 1. Implemente uma função que simula o carregamento de dados de um banco usando `setTimeout` e Promises.

const carregarDados = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados Carregados com sucesso!!")
        }, 2000)
    });
}

// 2. Escreva uma função que simule a espera por um evento usando `setTimeout` com Async/Await.

async function exibirDados() {
    const dados = await carregarDados();
    console.log("Buscando dados...")
    console.log(dados)
}

exibirDados();

// 3. Crie uma API falsa que retorne dados de produtos com atraso simulado e exiba os resultados no console.

const produtos = [
    { id: 1, nome: "produto1" },
    { id: 2, nome: "produto2" },
    { id: 3, nome: "produto3" }
];

obterProdutosComAtrasso = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(produtos);
        }, 2000)
    });
}

obterProdutosComAtrasso().then((dados) => {
    console.log("Dados recebidos da API:")
});

// 4. Escreva uma função que execute três tarefas sequenciais usando Promises e Async/Await.

function tarefa1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarefa 1 concluída");
            resolve("Resultado da Tarefa 1");
        }, 1000);
    });
}

function tarefa2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarefa 2 concluída");
            resolve("Resultado da Tarefa 2");
        }, 2000);
    });
}

function tarefa3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarefa 3 concluída");
            resolve("Resultado da Tarefa 3");
        }, 1500);
    });
}

async function executarTarefas() {
    console.log("Iniciando execução das tarefas...");

    const resultado1 = await tarefa1();
    console.log(resultado1);

    const resultado2 = await tarefa2();
    console.log(resultado2);

    const resultado3 = await tarefa3();
    console.log(resultado3);

    console.log("Todas as tarefas foram concluídas!");
}

executarTarefas();

