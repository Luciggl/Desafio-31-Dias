// ### **🎯 Exercícios Práticos**

// 1. Crie uma classe chamada `Livro` com atributos `titulo`, `autor` e `ano`. Adicione um método para exibir os detalhes do livro.

class livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    detalhes() {
        console.log(
            `Livro: ${this.titulo}
            Autor: ${this.autor} 
            ano de lancamento: ${this.ano}`
        )
    }
}

const brancaDeNeve = new livro("Branca de neve", "Chico Buarte", "2001")
brancaDeNeve.detalhes();

// 2. Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.

class ContaBancaria {
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor
        console.log(`O valor de ${valor} foi depositado na conta: ${this.numeroConta}`)
    }
    sacar(valor){
        this.saldo -= valor
        console.log(`O valor de ${valor} foi sacado da conta: ${this.numeroConta}`)
    }

}

let minhaConta = new ContaBancaria(1, 0)

minhaConta.depositar(10)
minhaConta.sacar(2)
console.log(minhaConta.saldo)

// 3. Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".

class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    comprimentar(){
        console.log(`Bem-vindo, ${this.nome}`)
    }
}

let Pedro = new Pessoa("Pedro", 17, "Masculino")
Pedro.comprimentar();

// 4. Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.

class Calculadora{
    somar(valor1, valor2){
        console.log(valor1 + valor2)
    }
    subtrair(valor1, valor2){
        console.log(valor1 - valor2)
    }
    multiplicar(valor1, valor2){
        console.log(valor1 * valor2)
    }
    dividir(valor1, valor2){
        console.log(valor1 /valor2)
    }
}

let calcular = new Calculadora();
console.log("soma: ")
calcular.somar(2, 1)
console.log("subtração: ")
calcular.subtrair(10, 9)
console.log("multiplicação: ")
calcular.multiplicar(10, 8)
console.log("Divisão: ")
calcular.dividir(100, 6)


// 5. Crie uma classe `Agenda` para armazenar e exibir contatos.