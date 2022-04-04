## Exercicio 1
- a) Varchar é do tipo string e ele recebe entre parenteses a quantidade de caracteres e Date representa uma data.

- b)No SHOW DATABASE apareceu uma tabela com minhas informações, no SHOW TABLES Apareceu uma tabela com o nome Actor.

- c) Ocorreu o erro 1050, mostrando table 'Actor' already exists

## Exercicio 2
- a) INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");

- b) Erro 1062, mostra que a chave primaria foi duplicada

- c) Erro 1136, aconteceu pois está faltando elementos NOT NULL dos valores originais

- d) Erro 1136, está faltando o name dos valores originais e name é NOT NULL

- e) Erro 1292, ocorreu porque data nos elementos originais é string e aqui foi passada como numeros

- f) criado!

## Exercicio 3
- a) SELECT * FROM Actor WHERE gender = "female";

- b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

- c) Mostrou todos os valores nulos

- d) SELECT id, name, salary  FROM Actor WHERE salary > 500000;

- e) Erro 1054, não existe nome na tabela de elementos declarados em cima


## Exercicio 4 
- a) Esse query é para buscar pessoas que tenham seus nomes com as inicias A ou J e com o salário maior que 300000. LIKE para comparar strings a "%" significa que pode vim qualquer coisa após dele, OR condicional para ser um ou o outro, AND para que só procure se as duas condicionais forem verdadeiras

- b) SELECT * FROM Actor WHERE (name <> "A%" ) AND salary > 350000

- c)SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

- d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary >= 350000 AND salary <= 900000;

## EXERCICIO 5
- a) CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sinopse VARCHAR(255) NOT NULL,
data_de_lancamento DATE NOT NULL,
avaliacao INT NOT NULL
);

- b) (
"001",
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
"2006-01-06",
7
)

- c) "002",
"Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
"2012-12-27",
10
)

- d) (
"003",
"Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
"2017-11-02",
8
)

- e) (
"004",
"Cabras da Peste", 
"Em Cabras da Peste, acompanhamos a história do cearense Bruceuilis e do paulista Trindade , dois policias totalmente incompatíveis que são forçados a trabalhar juntos para resgatar a Celestina, uma cabra que é considerada o patrimônio do Ceará. Durante a investigação, os dois descobrem que o sumiço do animal está interligado com as ações criminosas de Luva Branca, o maior alvo da polícia de São Paulo.", 
"2021-03-19",
6
)

## Exercicio 6 
- a) SELECT id, name FROM Filmes WHERE id = "id";

- b) SELECT * FROM Filmes WHERE nome = "nome";

- c) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

## Exercicio 7
- a) SELECT * FROM Filmes WHERE nome LIKE "%vida%";

- b) SELECT * FROM Filmes WHERE nome OR sinopse LIKE "%filme%";

- c) SELECT * FROM Filmes WHERE (nome OR sinopse LIKE "%eu%") AND avaliacao > 7;