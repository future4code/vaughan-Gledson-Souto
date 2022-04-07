# Exercicio 1
- a) Chaves estrangeiras, ou Foreign Key, é a forma de conectar uma tabela com a outra

- b) INSERT INTO Rating (id, comment, rate, movie_id) VALUE ("003", "Pessimo", 2, "002");

- c) Error Code: 1452. Não permite colocar uma avaliação em um filme que não existe

- d) ALTER TABLE Movie DROP COLUMN rating;

- e) Error Code: 1451. Não é possivel deletar um uma item que esteja atrelado de alguma forma a outra tabela.

# Exercicio 2
- a) Uma tabela de relação N:M, todos pra todos

- b) INSERT INTO MovieCast (movie_id, actor_id) VALUE("001", "001");

- c) Error Code: 1452. Não permite colocar um Ator não existente.

- d) Error Code: 1451. Não é possivel deletar um uma item que esteja atrelado de alguma forma a outra tabela.

# Exercicio 3
- a) Ela retorna a tabela movie com a tabela rating. O ON serve pra fazer a correspondecia certa entre as tabelas

- b) SELECT nome, Movie.id, Rating.rate FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;
