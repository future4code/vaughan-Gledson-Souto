## Exercicio 1
- a) Esse comando serve para remover o item da tabela, no caso iria remover o salary dos atores

- b) Este está trocando o nome do item da tabela de gender pra sex

- c) Está apenas aumentando o numero de caracteres que a pessoa pode colocar

- d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercicio 2
- a)UPDATE Actor SET name = "Galbi" , birth_date = "2000-04-01" WHERE id = "003";

- b)UPDATE Actor SET name = UPPER(name) WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";

- c) UPDATE Actor SET name = "julia" , salary = 30000 , birth_date = "2001-01-01" , gender = "male" WHERE id = "005";

- d) Atualizou sem nenhum erro porem nenhuma linha foi modificada

## Exercicio 3
- a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

- b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

## Exercicio 4
- a) SELECT salary FROM Actor ORDER BY salary DESC LIMIT 1;

- b) SELECT name, salary FROM Actor ORDER BY salary, gender = "female" ASC LIMIT 1;

- c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

- d) SELECT SUM(salary) FROM Actor;

## Exercicio 5
- a) Ele dividiu os tipos de generos e colocou a quantidade que cada um tem

- b) SELECT id, name FROM Actor ORDER BY name ASC;

- c) SELECT * FROM Actor ORDER BY salary;

- d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

- e)SELECT AVG(salary), gender FROM Actor GROUP BY gender;

## Exercicio 6
- a)ALTER TABLE Filmes ADD COLUMN filme_data_limite DATE;

- b)ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;

- c)UPDATE Filmes SET filme_data_limite = CURRENT_DATE() WHERE id = "002";
UPDATE Filmes SET filme_data_limite = "2021-12-31" WHERE id = "005";

- d) Atualizou sem nenhum erro porem nenhuma linha foi modificada




