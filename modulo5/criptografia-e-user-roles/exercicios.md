# Exercício 1

- a) rounds ta pengando uma informação vinda do .env e transformando em numero, e o salt é para gerar uma string aleatória toda vez uma senha for criada


# Exercício 2

- a) primeiro o cadastro, pois ja vai gerar a a senha aleatória para salvar no banco

- d) não pois ele não precisa de nenhuma criptografia, pois está acessando pelo token
# Exercício 3

- a) CREATE TABLE IF NOT EXISTS User (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) UNIQUE, 
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
);

- b) 

# Exercício 4