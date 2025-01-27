// ### **🎯 Exercícios Práticos**

// 1. Crie uma árvore para representar uma hierarquia organizacional (CEO - Diretores - Gerentes - Analistas).
// 2. Implemente uma função para contar o número total de nós em uma árvore.
// 3. Crie uma árvore genealógica e implemente um método para listar todos os descendentes de um nó.
// 4. Implemente uma busca em profundidade e largura para encontrar um nó com um valor específico.

class No {
    constructor(nome) {
        this.nome = nome;
        this.filhos = [];
    }

    adicionarFilho(filho) {
        this.filhos.push(filho);
    }

    contarNos() {
        let contador = 1;
        this.filhos.forEach(filho => {
            contador += filho.contarNos();
        });
        return contador;
    }

    listarDescendentes() {
        const descendentes = [];
        function coletarDescendentes(no) {
            no.filhos.forEach(filho => {
                descendentes.push(filho.nome);
                coletarDescendentes(filho);
            });
        }
        coletarDescendentes(this);
        return descendentes;
    }

    buscaProfundidade(valor) {
        if (this.nome === valor) {
            return this;
        }
        for (let filho of this.filhos) {
            const encontrado = filho.buscaProfundidade(valor);
            if (encontrado) {
                return encontrado;
            }
        }
        return null;
    }

    buscaLargura(valor) {
        const fila = [this];
        while (fila.length > 0) {
            const atual = fila.shift();
            if (atual.nome === valor) {
                return atual;
            }
            fila.push(...atual.filhos);
        }
        return null;
    }
}

const raiz = new No("CEO");
const diretor1 = new No("Diretor 1");
const diretor2 = new No("Diretor 2");
const gerente1 = new No("Gerente 1");
const gerente2 = new No("Gerente 2");
const analista1 = new No("Analista 1");
const analista2 = new No("Analista 2");

raiz.adicionarFilho(diretor1);
raiz.adicionarFilho(diretor2);
diretor1.adicionarFilho(gerente1);
diretor2.adicionarFilho(gerente2);
gerente1.adicionarFilho(analista1);
gerente2.adicionarFilho(analista2);

console.log("Total de nós:", raiz.contarNos());
console.log("Descendentes do CEO:", raiz.listarDescendentes());
console.log("Busca em profundidade por 'Gerente 1':", raiz.buscaProfundidade("Gerente 1")?.nome);
console.log("Busca em largura por 'Analista 2':", raiz.buscaLargura("Analista 2")?.nome);
