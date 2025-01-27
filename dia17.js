// ### **🎯 Exercícios Práticos**

class Grafo {
    constructor() {
        this.adjacencias = new Map();
    }

    adicionarNo(no) {
        if (!this.adjacencias.has(no)) {
            this.adjacencias.set(no, []);
        }
    }

    adicionarAresta(no1, no2) {
        if (this.adjacencias.has(no1) && this.adjacencias.has(no2)) {
            this.adjacencias.get(no1).push(no2);
            this.adjacencias.get(no2).push(no1); // Grafo não direcionado
        }
    }

    verificarConexao(no1, no2) {
        const visitados = new Set();
        const fila = [no1];

        while (fila.length > 0) {
            const atual = fila.shift();
            if (atual === no2) {
                return true;
            }

            visitados.add(atual);

            for (let vizinho of this.adjacencias.get(atual)) {
                if (!visitados.has(vizinho)) {
                    fila.push(vizinho);
                }
            }
        }

        return false;
    }

    mostrarAmizades() {
        const amizades = [];
        for (let [no, vizinhos] of this.adjacencias) {
            amizades.push(`${no}: ${vizinhos.join(", ")}`);
        }
        return amizades.join("\n");
    }
}

// 1. Implemente um grafo para representar rotas entre cidades.

const grafoRotas = new Grafo();
grafoRotas.adicionarNo("Cidade A");
grafoRotas.adicionarNo("Cidade B");
grafoRotas.adicionarNo("Cidade C");
grafoRotas.adicionarAresta("Cidade A", "Cidade B");
grafoRotas.adicionarAresta("Cidade B", "Cidade C");

// 2. Crie uma função para verificar se dois nós estão conectados em um grafo.

console.log("Cidade A está conectada a Cidade C?", grafoRotas.verificarConexao("Cidade A", "Cidade C"));
console.log("Cidade A está conectada a Cidade D?", grafoRotas.verificarConexao("Cidade A", "Cidade D"));


// 3. Implemente um grafo para modelar um sistema de amizades em uma rede social.

const grafoAmizades = new Grafo();
grafoAmizades.adicionarNo("Alice");
grafoAmizades.adicionarNo("Bob");
grafoAmizades.adicionarNo("Charlie");
grafoAmizades.adicionarAresta("Alice", "Bob");
grafoAmizades.adicionarAresta("Bob", "Charlie");

console.log("\nRede de amizades:");
console.log(grafoAmizades.mostrarAmizades());