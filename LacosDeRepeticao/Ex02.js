var prompt = require('prompt-sync')();

let num = Number(prompt("Digite seu numero: "));
let somar = 0;

while(num !== 0){
    somar += num
    num = Number(prompt("Digite seu numero e caso queira sair, digite 0!  "));
}

console.log(somar)