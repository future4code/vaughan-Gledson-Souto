```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
const media_ponderada = (ex * 1) + (p1 * 2) + (p2 * 3);
let resultado = "";
  
if(media_ponderada / 6 >= 9){
  return resultado = "A"
}else if(media_ponderada / 6 < 9 && media_ponderada / 6 >= 7.5){
  return resultado = "B"
}else if(media_ponderada / 6 < 7.5 && media_ponderada / 6 >= 6){
  return resultado = "C"
}else{
  return resultado = "D"
}
return resultado
}```