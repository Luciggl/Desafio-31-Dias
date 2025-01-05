// ### **🎯 Exercícios Práticos**

// 1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
// 2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
// 3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
// 4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
// 5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
// 6. Valide se um URL começa com `https://` e termina com `.com`.
let Url = "https://localhost:8081.com";
if(Url.startsWith("https://") && Url.endsWith(".com")){
    console.log("Link Valido")
} else console.log("Link Invalido")