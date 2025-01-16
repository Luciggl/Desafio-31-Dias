// ### **🎯 Exercícios Práticos**

// 1. Implemente uma pilha com métodos para adicionar, remover e visualizar o topo.

class Pilha{
    #itens;
    constructor(){
        this.#itens = []
    }
    adicionar(item){
        this.#itens.push(item)
    }
    remover(){
        this.#itens.pop();
    }
    visualizar(){
        let index = this.#itens.length - 1;
        return console.log(this.#itens[index])
    }
}

const pilha = new Pilha();
pilha.adicionar("prato")
pilha.adicionar("prato2")
pilha.adicionar("prato3")
pilha.visualizar()
pilha.remover()
pilha.visualizar()

// 2. Crie uma função que use uma pilha para verificar se uma string é um palíndromo.
// 3. Simule o funcionamento do botão "Desfazer" em um editor de texto usando pilhas.
// 4. Escreva uma função que converta números decimais para binários usando pilhas.
// 5. Use uma pilha para resolver expressões matemáticas como `(1 + (2 * 3))`.

