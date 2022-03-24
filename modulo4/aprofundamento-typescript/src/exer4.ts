//Exercicio 4

// a) none

// b) Dentro do aquivo package.json no objeto scripts eu colocaria um propriedade para que quando
// eu rodasse o comando "tsc && node ./index.js" ele transpilasse o arquivo .ts para .js

// c) Se o arquivo .ts tivesse em outra pasta não mudaria, mas caso eu quiser transpilar o arquivo .js para outra pasta
// aí eu precisaria mudar a rota dele dentro do package.json na propriedade do objeto Scripts

// d) Sim, dentro da do aquivo package.json na propriedade do objeto Scripts eu posso colocar o caminho depois que colocar o "tsc"
//posso tanto colocar o nome de um aquivo que está na mesma pasta "tsc arquivo1.ts ..." como colocar arquivos que estão em outras pastas
// como: "tsc arquivo1.ts ../outros-arquivos/arquivo2.ts"