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

console.log("")
// 2. Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.

class Funcionario {
    #salario
    constructor(salarioInicial, nome, profissao, idade, sexo) {
        this.#salario = salarioInicial;
        this.nome = nome;
        this.profissao = profissao;
        this.idade = idade;
        this.sexo = sexo;
    }
    setarSalario(novoSalario) {
        this.#salario = novoSalario
        console.log(`Salario do funcionario ${this.nome} foi alterado pra ${novoSalario} com sucesso!`)
    }
    exibirSalario() {
        let salario = this.#salario
        return salario
    }
    exibirInformacoes() {
        console.log(`Funcionario ${this.nome}, profissão: ${this.profissao}, idade: ${this.idade}, sexo ${this.sexo}, salario ${this.exibirSalario()}`);
    }
}

class Gerente extends Funcionario {
    #salario
    constructor(salarioInicial, nome, profissao, idade, sexo, setor) {
        super(salarioInicial, nome, profissao, idade, sexo)
        this.setor = setor
    }
    exibirInformacoes() {
        console.log(
            `Gerente ${this.nome}, profissão: ${this.profissao}, idade: ${this.idade}, sexo: ${this.sexo}, salário: ${this.exibirSalario()}, setor: ${this.setor}`
        );
    }
}

const funcionario = new Funcionario(3000, "João", "Programador", 30, "Masculino");
const gerente = new Gerente(5000, "Ana", "Gerente de TI", 40, "Feminino", "Tecnologia");

console.log("\nFuncionário:");
funcionario.exibirInformacoes();
funcionario.setarSalario(3500);
funcionario.exibirInformacoes();

console.log("\nGerente:");
gerente.exibirInformacoes();
gerente.setarSalario(5500);
gerente.exibirInformacoes();
console.log("")

// 3. Crie uma superclasse `Forma` com um método para calcular área, e subclasses como `Quadrado` e `Círculo` que sobrescrevam esse método.

class Forma {
    calcularArea() {
        throw new Error("O metodo calcular area precisa ser implementado")
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super()
        this.lado = lado
    }
    calcularArea(lado) {
        return this.lado ** 2
    }
}

class Circulo extends Forma {
    constructor(area) {
        super()
        this.area = area
    }
    calcularArea(area) {
        return Math.PI * this.area ** 1
    }
}

const quadrado = new Quadrado(5); // Lado = 5
const circulo = new Circulo(3);  // Raio = 3

console.log(`Área do quadrado: ${quadrado.calcularArea()} unidades²`);
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)} unidades²`);
console.log("")

// 4. Escreva uma classe `Animal` e subclasses como `Cachorro` e `Gato`, cada uma com métodos específicos.

class Animal {
    constructor(raca, nome, tutor) {
        this.raca = raca;
        this.nome = nome;
        this.tutor, tutor;
    }
    exibirInformacoes() {
        console.log(`Animal: ${this.nome}, Raça: ${this.raca}, Tutor: ${this.tutor}`);
    }
}

class Cachorro extends Animal {
    constructor(...args) {
        super(...args)
    }
    latir() {
        console.log("Au AU Au AU!")
    }
}

class Gato extends Animal {
    constructor(...args) {
        super(...args)
    }
    miar() {
        console.log("Miau MIAU miau MIAU!")
    }
}

const cachorro = new Cachorro("Labrador", "Rex", "João");
const gato = new Gato("Siamês", "Luna", "Maria");

console.log("Informações dos animais:");
cachorro.exibirInformacoes();
gato.exibirInformacoes();

console.log("\nInterações dos animais:");
cachorro.latir();
gato.miar();
console.log("")

// 5. Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo.

class Conta {
    #saldo
    constructor(numeroConta, titular, saldoInicial = 0) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    exibirInformacoes() {
        console.log(`Conta: ${this.numeroConta}, Titular: ${this.titular} saldo: ${this.exibirSaldo()}`)
    }
    exibirSaldo() {
        return this.#saldo
    }
    depositar(valor) {
        this.#saldo += valor
        console.log(`Valor de R$: ${valor} foi depositado a sua conta`)
    }
    sacar(valor) {
        this.#saldo -= valor
        console.log(`Valor de R$: ${valor} foi sacado da sua conta`)

    }
}

class ContaPoupanca extends Conta {
    #juros
    constructor(numeroConta, titular, saldoInicial = 0, juroAnul) {
        super(numeroConta, titular, saldoInicial)
        this.#juros = juroAnul
    }
    aplicarJuros(){
        const juros = (this.exibirSaldo() * this.#juros) / 100
        this.depositar(juros)
    }
}

const conta1 = new Conta(12345, "Luciélio", 1000);
conta1.exibirInformacoes();  

conta1.depositar(500);
conta1.exibirInformacoes();  

conta1.sacar(200);
conta1.exibirInformacoes();  


const contaPoupanca1 = new ContaPoupanca(67890, "Luciélio", 1000, 5); 
contaPoupanca1.exibirInformacoes(); 

contaPoupanca1.aplicarJuros();
contaPoupanca1.exibirInformacoes();
