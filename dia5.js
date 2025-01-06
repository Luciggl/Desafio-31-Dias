// ### **🎯 Exercícios Práticos**

// 1. Use um loop `for` para imprimir os números de 1 a 10 no console.

for(let i = 1; i <=10; i++){
    console.log(i)
}

// 2. Crie uma lista de nomes e use um `for` para exibir cada nome.

const pessoas = ["joão", "maria", "patricia", "pedro"]

for(let j = 0; j < pessoas.length; ++j){
    console.log(pessoas[j])
}

// 3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

const arrayNumeros = [1, 2, 3, 5,10, 12, 20]

for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i] > 10){
        console.log(`Primeiro numero maior que 10 encontrado no array foi ${arrayNumeros[i]}`)
        break
    }
}

// 4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.

let contagemRegressiva = 10;

while(contagemRegressiva !== 0){
    contagemRegressiva--
}
console.log("Lançamento!")

// 5. Com um `do...while`, simule um caixa eletrônico pedindo a senha até que ela esteja correta.
// 6. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).