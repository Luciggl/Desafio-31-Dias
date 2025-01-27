create DATABASE empresa;

CREATE TABLE funcionarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100),
    salario DECIMAL(10, 2)
);

ALTER TABLE
    funcionarios
ADD
    COLUMN data_admissao DATE;

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

SELECT * FROM funcionarios;

DROP TABLE funcionarios;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    data_admissao DATE,
    departamento VARCHAR(50)
)