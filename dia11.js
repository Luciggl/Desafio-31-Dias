// ### **🎯 Exercícios Práticos**

// 1. Crie uma classe `ContaBancaria` que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.

class ContaBancaria {
    #saldo
    constructor(saldoInical){
        this.#saldo = saldoInical;
    }
    depositar(valor){
        this.#saldo += valor
    }
    sacar(valor){
        this.#saldo -= valor
    }
    consultarSaldo(){
        return this.#saldo
    }
}

const conta = new ContaBancaria(10)
conta.depositar(100)
conta.sacar(1)
console.log(conta.consultarSaldo())

// 2. Implemente uma classe `Usuario` que armazena uma senha privada e permite alterar a senha com validação.

class Usuario {
    #senha
    constructor(senhaInicial){
        this.#senha = senhaInicial
    }
    alterarSenha(novaSenha){
        this.#senha = novaSenha
    }
    verificar(senha){
        return this.#senha === senha
    }
}

const user = new Usuario(123);
user.alterarSenha(321)
console.log(user.verificar(321))

// 3. Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.

class ControleRemoto{
    ligarTv(){
        console.log("Ligando TV...")
    }
    desligarTv(){
        console.log("Desligando TV...")
    }
}

const controleCasa = new ControleRemoto;

controleCasa.ligarTv();
controleCasa.desligarTv();

// 4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.

class Cofre{
    #senha
    #itens
    constructor(senhaInicial){
        this.#senha = senhaInicial
        this.#itens = []
    }
    adicionarNoCofre(item){
        this.#itens.push(item)
    }
    exibirValores(senha){
        if(this.#senha === senha){
            return `Itens do cofre: ${this.#itens}`
        } else return `Acesso negado!`
    }
}


const cofrePessoal = new Cofre(2012);
cofrePessoal.adicionarNoCofre("Arma ")
cofrePessoal.adicionarNoCofre("Joias ")
cofrePessoal.adicionarNoCofre("Chave carro ")
console.log(cofrePessoal.exibirValores(2012))

// 5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.

class CarrinhoCompra {
    #itens
    constructor(){
        this.#itens = []
    }
    adicionarAoCarrinho(item){
        this.#itens.push(item)
        console.log(`${item} foi adicionado ao carrinho`)
    }
    removerDoCarrinho(nomeItem){
        let index = this.#itens.indexOf(nomeItem)
        if(index !== -1){
            const removedItem = this.#itens.slice(index, 1)[0];
            return console.log(`${removedItem} foi removido do carrinho`)
        }
        return console.log(`Produto ${nomeItem}, não foi encontrado no carrinho`)
    }
    listarItens(){
        return console.log(`Lista de Produtos: ${this.#itens}`)
    }
}

const carrinho = new CarrinhoCompra();

carrinho.adicionarAoCarrinho("Arroz");
carrinho.adicionarAoCarrinho("Feijão");
carrinho.adicionarAoCarrinho("Macarrão");

carrinho.listarItens();

carrinho.removerDoCarrinho("Feijão");

carrinho.listarItens();

carrinho.removerDoCarrinho("Pão");

carrinho.adicionarAoCarrinho("Leite");
carrinho.adicionarAoCarrinho("Açúcar");

carrinho.listarItens();
