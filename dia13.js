// ### **🎯 Exercícios Práticos**

// 1. Crie uma classe `Funcionario` com um método `calcularSalario`. Implemente subclasses como `Desenvolvedor` e `Gerente` que sobrescrevem esse método.

class Funcionario {
    constructor(valorHora, horaTrabalhada, nome, funcao) {
        this.valorHora = valorHora;
        this.horaTrabalhada = horaTrabalhada;
        this.nome = nome;
        this.funcao = funcao
    }
    calcularSalario() {
        return this.valorHora * this.horaTrabalhada
    }
}

class Desenvolvedor extends Funcionario {
    constructor(...args) {
        super(...args)
    }
    calcularSalario() {
        return this.valorHora * this.horaTrabalhada * 1.05
    }
}

class Gerente extends Funcionario {
    constructor(...args) {
        super(...args)
    }
    calcularSalario() {
        return this.horaTrabalhada * this.valorHora * 1.10
    }
}

const funcionario1 = new Funcionario(50, 160, "João", "Assistente");
const desenvolvedor1 = new Desenvolvedor(80, 160, "Maria", "Desenvolvedora");
const gerente1 = new Gerente(100, 160, "Carlos", "Gerente");

console.log(`Salário de ${funcionario1.nome} (${funcionario1.funcao}): R$${funcionario1.calcularSalario().toFixed(2)}`);
console.log(`Salário de ${desenvolvedor1.nome} (${desenvolvedor1.funcao}): R$${desenvolvedor1.calcularSalario().toFixed(2)}`);
console.log(`Salário de ${gerente1.nome} (${gerente1.funcao}): R$${gerente1.calcularSalario().toFixed(2)}`);


// 2. Implemente uma classe `Transporte` e subclasses como `Carro`, `Avião` e `Barco`, cada uma com seu método `mover`.

class Transporte {
    constructor(nomeVeiculo, marca, velocidadeFinal) {
        this.nomeVeiculo = nomeVeiculo;
        this.marca = marca;
        this.velocidadeFinal = velocidadeFinal;
    }
    mover() {
        return console.log(`O veiculo ${this.nomeVeiculo} esta se movendo`)
    }
}

class Carro extends Transporte {
    constructor(...args) {
        super(...args)
    }
    mover() {
        return console.log(`O Carro ${this.nomeVeiculo} esta se movendo na rodovia`)
    }
}

class Aviao extends Transporte {
    constructor(...args) {
        super(...args)
    }
    mover() {
        return console.log(`O Avião ${this.nomeVeiculo} esta cruzando os ares`)
    }
}
class Barco extends Transporte {
    constructor(...args) {
        super(...args)
    }
    mover() {
        return console.log(`O barco ${this.nomeVeiculo} esta velejando por ai`)
    }
}

const carro = new Carro("Fusca", "Volkswagen", 160);
const aviao = new Aviao("Boeing 747", "Boeing", 900);
const barco = new Barco("Titanic", "White Star Line", 40);

carro.mover();
aviao.mover();
barco.mover();

// 3. Crie uma superclasse `Documento` com um método `exibirConteudo`, e subclasses como `PDF` e `Word` que personalizem esse método.

class Documento {
    constructor(nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }
    exibirConteudo(){
        console.log(`Abrindo documento ${this.nomeArquivo}`)
    }
}

class PDF extends Documento{
    constructor(...args){
        super(...args)
    }
    exibirConteudo(){
        console.log(`Abrindo documento ${this.nomeArquivo}.pdf`)
    }
}


class Word extends Documento{
    constructor(...args){
        super(...args)
    }
    exibirConteudo(){
        console.log(`Abrindo documento ${this.nomeArquivo}.word`)
    }
}

const doc1 = new Documento("Relatorio");
const pdf1 = new PDF("Apresentacao");
const word1 = new Word("TCC");

doc1.exibirConteudo(); 
pdf1.exibirConteudo();  
word1.exibirConteudo(); 

// 4. Implemente um sistema de animais com uma superclasse `Animal` e métodos específicos em subclasses como `Passaro` e `Peixe`.
// 5. Use o polimorfismo para criar uma lista de diferentes formas geométricas (`Quadrado`, `Círculo`, etc.) e calcule suas áreas.