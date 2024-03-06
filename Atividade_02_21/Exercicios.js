const readlineSync = require('readline-sync');

console.log("Digite a Nota do aluno na primeira matéria:");
let nota01 = parseFloat(readlineSync.prompt());

console.log("Digite a Nota do aluno na segunda matéria:");
let nota02 = parseFloat(readlineSync.prompt());

console.log("Digite a Nota do aluno na terceira matéria:");
let nota03 = parseFloat(readlineSync.prompt());

console.log("Digite a Nota do aluno na quarta matéria:");
let nota04 = parseFloat(readlineSync.prompt());

let soma = nota01 + nota02 + nota03 + nota04;
let media = soma / 4;

console.log("A Soma das notas do Aluno é " + soma + " e a média das notas do aluno é " + media + ".");
