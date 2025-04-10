var prompt = require('prompt-sync')();

let idade = Number(prompt("Digite a sua idade: "));

do{
    idade = Number(prompt("Digite uma idade válida: "));
}
while(idade <= 0)

console.log("Idade Válida!")