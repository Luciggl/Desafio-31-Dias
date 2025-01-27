-- 1. Crie um banco de dados chamado empresa.
create DATABASE empresa;



Aqui estão os comandos SQL para realizar as operações solicitadas:

-- 2. Dentro do banco empresa, crie uma tabela funcionarios com os seguintes campos:
-- id (chave primária, numeração automática).
-- nome (texto, obrigatório).
-- cargo (texto).
-- salario (número decimal).


CREATE TABLE funcionarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100),
    salario DECIMAL(10, 2)
);

-- 3. Adicione uma coluna data_admissao à tabela funcionarios.

ALTER TABLE
    funcionarios
ADD
    COLUMN data_admissao DATE;

-- 4. Insira pelo menos 3 registros na tabela funcionarios.

INSERT INTO
    funcionarios (nome, cargo, salario, data_admissao)
VALUES
    (
        'João',
        'Gerente',
        5000.00,
        '2022-02-10'),
    (
        'Maria Oliveira',
        'Analista',
        3500.00,
        '2020-08-22'
    ),
    (
        'Carlos Souza',
        'Desenvolvedor',
        4500.00,
        '2022-02-01'
    );

-- 5. Liste os registros usando um comando SELECT.

SELECT * FROM funcionarios;

-- 6. Exclua a tabela funcionarios e recrie-a com um campo adicional para departamento.

DROP TABLE funcionarios;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    data_admissao DATE,
    departamento VARCHAR(50)
)