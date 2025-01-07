// ### **🎯 Exercícios Práticos**

// 1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.

const cores = ["azul", "amarelo", "vermelho"]
cores.push("roxo")

// 2. Use um loop para exibir todos os itens de um array de compras.

const compras = ["arroz", "feijão", "macarrão", "batata", "coca-cola", "leite", "pão"]
for(compra in compras){
    console.log(compras[compra])
}

// 3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.

const numeros = [10, 20, 30, 40, 50]
numeros.splice(3, 2)
console.log(numeros)

// 4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.

const tarefas = ["arrumar a casa", "limpar o quintal", "aparar o capim", "lavar Roupa"]
tarefas.shift();
console.log(tarefas)

// 5. Use `splice` para substituir o terceiro item de um array por "Substituído".

const array = ["agua", "fogo", "terra", "ar", "avião", "baleia", "pera"]
array.splice(2, 1, "Substituido")
console.log(array)

// 6. Transforme um array de palavras em uma frase completa usando `join`.

const fraseArray = ["Ola " , "tudo bem? ", "Meu ", "nome ", "é ", "pedro"]
let frase = fraseArray.join(" ")
console.log(frase)