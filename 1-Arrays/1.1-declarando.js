//Formas de declarar arrays em js
// 1 -  usando o objeto Array
const arr = new Array();

// 1.1 - podemos dizer quantas posicoes 
// teremos ja no construtor
arr = new Array(6);

// 1.2 - tambem podemos colocar diretamente
// os dados
arr = new Array("comer", "andar", "saltitar");

// OBS: Essas formas de declarar arrays 
// nao sao as melhores praticas


// Declarando arrays da melhor forma
// 2 - apenas usando colchetes vazios
const arr2 = [];

// 2.1 - colocando dentro dos colchetes 
// os dados
arr2 = ["comer", "andar", "saltitar"];


/* Arrays devem ter dados do mesmo tipo.
Por mais que o javascript permita colocar
tipos diferentes, essa nao e uma boa pratica */