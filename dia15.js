// ### **🎯 Exercícios Práticos**

class Fila{
    #dados;
    constructor() {
        this.#dados = []
    }
    adicionarAFila(dado){
        this.#dados.push(dado)
    }
    removerDaFila(){
        console.log(`item ${this.#dados[0]} foi removido da fila`)
        this.#dados.shift()
    }
    mostrarFila(){
        return console.log(this.#dados)
    }
}

// 1. Implemente uma fila que gerencie o atendimento de clientes em um restaurante.

class PedidosRestourante extends Fila{
    constructor(...args) {
        super(...args)
    }
}

const filaRestourante = new PedidosRestourante();
filaRestourante.adicionarAFila("Arroz")
filaRestourante.adicionarAFila("Feijão")
filaRestourante.adicionarAFila("Pure")
filaRestourante.mostrarFila()
filaRestourante.removerDaFila();
filaRestourante.mostrarFila()

// 2. Crie uma fila que armazene músicas em uma playlist e remova a música quando for tocada.

class Playlist extends Fila{
    constructor(...args){
        super(...args)
    }
}

const playlist = new Playlist();
playlist.adicionarAFila("Menina veneno");
playlist.adicionarAFila("Year Zero");
playlist.adicionarAFila("Decida");
playlist.mostrarFila();
playlist.removerDaFila();
playlist.mostrarFila()

// 3. Escreva uma função que use uma fila para simular uma fila de caixa de supermercado.

class CaixaMercado extends Fila{
    constructor(...args) {
        super(...args)
    }
}

const caixaMercado = new CaixaMercado();
caixaMercado.adicionarAFila("Cliente 1");
caixaMercado.adicionarAFila("Cliente 2");
caixaMercado.adicionarAFila("Cliente 3");
caixaMercado.mostrarFila();
caixaMercado.removerDaFila();
caixaMercado.mostrarFila();


// 4. Use uma fila para implementar um sistema de envio de mensagens em lote.

class EnviarMsg extends Fila{
    constructor(...args){
        super(...args)
    }
}

const envioMsg = new EnviarMsg();
envioMsg.adicionarAFila("Mensagem 1");
envioMsg.adicionarAFila("Mensagem 2");
envioMsg.adicionarAFila("Mensagem 3");
envioMsg.mostrarFila();
envioMsg.removerDaFila();
envioMsg.mostrarFila();

// 5. Crie uma fila que armazene processos pendentes e os execute na ordem de chegada.

class Processos extends Fila{
    constructor(...args){
        super(...args)
    }
}   

const processosPendentes = new Processos();
processosPendentes.adicionarAFila("Processo 1");
processosPendentes.adicionarAFila("Processo 2");
processosPendentes.adicionarAFila("Processo 3");
processosPendentes.mostrarFila();
processosPendentes.removerDaFila();
processosPendentes.mostrarFila();