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
// 3. Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".
// 4. Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.
// 5. Crie uma classe `Agenda` para armazenar e exibir contatos.