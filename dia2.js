// ### **🎯 Exercícios Práticos**

// 1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.

let hora;

hora = 4;
if (hora >= 6 && hora <= 12) {
    return console.log("Bom Dia")
}
if (hora > 12 && hora <= 18) {
    return console.log("Boa Tarde")
}
return console.log("Boa noite")

// 2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
// 3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
// 4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
// 5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
// 6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.