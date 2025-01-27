-- 1. **Criação:**
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    email VARCHAR(100) NOT NULL
);

--     - Adicione 3 novos usuários à tabela usuarios.
INSERT INTO
    usuarios (nome, idade, email)
VALUES
    ('Ana Souza', 25, 'ana.souza@example.com'),
    (
        'Ricardo Oliveira',
        28,
        'ricardo.oliveira@example.com'
    ),
    (
        'Fernanda Costa',
        22,
        'fernanda.costa@example.com'
    );

-- 2. **Leitura:**
--     - Liste todos os registros da tabela.
SELECT
    *
FROM
    usuarios;

--     - Liste apenas os usuários com idade menor que 30.
SELECT
    *
FROM
    usuarios
WHERE
    idade < 30;

-- 3. **Atualização:**
--     - Atualize o e-mail de um usuário específico.
UPDATE
    usuarios
SET
    email = 'novo.email@example.com'
WHERE
    id = 2;

--     - Altere a idade de todos os usuários para 40.
UPDATE
    usuarios
SET
    idade = 40;

-- 4. **Deleção:**
--     - Remova um registro usando o id.
DELETE FROM
    usuarios
WHERE
    id = 2;

--     - Exclua todos os registros da tabela, mas mantenha a estrutura da tabela.
DELETE FROM
    usuarios;