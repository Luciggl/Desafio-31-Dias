// ### **🎯 Exercícios Práticos**

// 1. Crie uma classe `Veiculo` e duas subclasses: `Carro` e `Moto`. Adicione métodos específicos para cada subclasse.

class Veiculo {
    #estaLigado = false;
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    ligar() {
        let resposta = !this.#estaLigado ? `O ${this.modelo} esta ligado vrum vrum` : " O veiculo ja esta Ligado"
        console.log(resposta)
        if (!this.#estaLigado) {
            this.#estaLigado = true
        }
    }
    acelerar() {
        let resposta = this.#estaLigado ? `O veiculo ${this.modelo} esta acelerando ` : `O veiculos esta desligado não foi possivel acelerar!`
        console.log(resposta)
    }
    freiar() {
        let resposta = this.#estaLigado ? `O veiculo ${this.modelo} esta freiando` : `O veiculos esta desligado não foi possivel freiar!`
        console.log(resposta)
    }
    desligar() {
        let resposta = !this.#estaLigado ? `Não foi possivel desligar o veiculo por que ele esta desligado` : `Desligando veiculo`
        if (this.#estaLigado) {
            this.#estaLigado = false;
        }
        console.log(resposta)
    }
    estaLigado() {
        return this.#estaLigado
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano)
    }
    empinar() {
        if (this.estaLigado() != false) {
            console.log(`A moto ${this.modelo} esta empinando`)
        }
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano)
    }
    darCavaloDePau() {
        if (this.estaLigado() != false) {
            console.log(`O carro ${this.modelo} esta dando cavalo de pau`)
        }
    }
}

const moto = new Moto("Yamaha", "MT-03", 2022);
const carro = new Carro("Chevrolet", "Onix", 2021);

console.log("\nTeste da Moto:");
moto.ligar();
moto.acelerar();
moto.empinar();
moto.freiar();
moto.desligar();

console.log("\nTeste do Carro:");
carro.ligar();
carro.acelerar();
carro.darCavaloDePau();
carro.freiar();
carro.desligar();

// 2. Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.
// 3. Crie uma superclasse `Forma` com um método para calcular área, e subclasses como `Quadrado` e `Círculo` que sobrescrevam esse método.
// 4. Escreva uma classe `Animal` e subclasses como `Cachorro` e `Gato`, cada uma com métodos específicos.
// 5. Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo.