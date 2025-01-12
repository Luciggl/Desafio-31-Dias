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
// 3. Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.
// 4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.
// 5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.