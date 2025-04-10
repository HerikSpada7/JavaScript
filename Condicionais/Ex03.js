var prompt = require('prompt-sync')();

let n1 = prompt("Digite seu numero: ");

if(n1 % 2 == 0){
    console.log("O numero digitado é par!")
}
else if(n1 % 1 == 0){
    console.log("O numero é ímpar!")
}
else{
    console.log("Dados inválidos")
}