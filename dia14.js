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

const reverterStr = (str)=> {
    const pilha = [];
    for(let char of str){
        pilha.push(char)
    }
    let resultado = "";
    while(pilha.length > 0){
        resultado += pilha.pop();
    }
    return resultado
}

const verificarPalindromo = (str) =>{
    let palavraInicial = str;
    let palavraReversa = reverterStr(str);
    if(palavraInicial === palavraReversa){
        return console.log(`A palavra ${str} é palindromo`)
    } else return console.log(`A palavra ${str} não é um palindromo`)
}



// 3. Simule o funcionamento do botão "Desfazer" em um editor de texto usando pilhas.

class EditorTexto {
    constructor() {
      this.texto = '';
      this.pilhaDeAcoes = [];
      this.pilhaDeDesfazer = [];
    }
  
    adicionarTexto(novoTexto) {
      this.pilhaDeAcoes.push(this.texto);
      this.texto = novoTexto;
      console.log("Texto Atual: ", this.texto);
    }
  
    desfazer() {
      if (this.pilhaDeAcoes.length > 0) {
        const ultimoTexto = this.pilhaDeAcoes.pop();
        this.pilhaDeDesfazer.push(this.texto);
        this.texto = ultimoTexto;
        console.log("Texto Após Desfazer: ", this.texto);
      } else {
        console.log("Não há ações para desfazer.");
      }
    }
  
    refazer() {
      if (this.pilhaDeDesfazer.length > 0) {
        const textoDesfeito = this.pilhaDeDesfazer.pop();
        this.pilhaDeAcoes.push(this.texto);
        this.texto = textoDesfeito;
        console.log("Texto Após Refazer: ", this.texto);
      } else {
        console.log("Não há ações para refazer.");
      }
    }
  }
  
  const editor = new EditorTexto();
  
  editor.adicionarTexto('Texto 1');
  editor.adicionarTexto('Texto 2');
  editor.adicionarTexto('Texto 3');
  
  editor.desfazer();
  editor.desfazer();
  editor.refazer();
  editor.refazer();
  

// 4. Escreva uma função que converta números decimais para binários usando pilhas.

function decimalParaBinario(numero) {
    const pilha = [];
    
    while (numero > 0) {
      pilha.push(numero % 2);
      numero = Math.floor(numero / 2);
    }
    
    let binario = '';
    while (pilha.length > 0) {
      binario += pilha.pop();
    }
    
    return binario;
  }
  
  console.log(decimalParaBinario(2)); 
  

// 5. Use uma pilha para resolver expressões matemáticas como `(1 + (2 * 3))`.

function avaliarExpressao(expressao) {
    const pilhaOperandos = [];
    const pilhaOperadores = [];
  
    const precedencia = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    function aplicarOperador() {
      const operador = pilhaOperadores.pop();
      const valor2 = pilhaOperandos.pop();
      const valor1 = pilhaOperandos.pop();
      
      let resultado;
      if (operador === '+') {
        resultado = valor1 + valor2;
      } else if (operador === '-') {
        resultado = valor1 - valor2;
      } else if (operador === '*') {
        resultado = valor1 * valor2;
      } else if (operador === '/') {
        resultado = valor1 / valor2;
      }
      pilhaOperandos.push(resultado);
    }
  
    for (let i = 0; i < expressao.length; i++) {
      const caractere = expressao[i];
  
      if (caractere === ' ') {
        continue;
      }
  
      if (/\d/.test(caractere)) {
        let numero = 0;
        while (i < expressao.length && /\d/.test(expressao[i])) {
          numero = numero * 10 + parseInt(expressao[i]);
          i++;
        }
        i--; 
        pilhaOperandos.push(numero);
      } else if (caractere === '(') {
        pilhaOperadores.push(caractere);
      } else if (caractere === ')') {
        while (pilhaOperadores.length && pilhaOperadores[pilhaOperadores.length - 1] !== '(') {
          aplicarOperador();
        }
        pilhaOperadores.pop();  
      } else if (['+', '-', '*', '/'].includes(caractere)) {
        while (pilhaOperadores.length && precedencia[caractere] <= precedencia[pilhaOperadores[pilhaOperadores.length - 1]]) {
          aplicarOperador();
        }
        pilhaOperadores.push(caractere);
      }
    }
  
    while (pilhaOperadores.length) {
      aplicarOperador();
    }
  
    return pilhaOperandos.pop();
  }
  
  console.log(avaliarExpressao("(1 + (2 * 3))")); 
  
