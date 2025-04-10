var prompt = require('prompt-sync')();

let n1 = prompt("Digite seu numero: ");


if (n1 < 0){
    console.log("O numero digitado é negativo!")
}
else if(n1 > 0){
    console.log("O numero digitado é positivo!")
}
else if(n1 = 0){
    console.log("O numero digitado é zero!")
}
else{
    console.log("Os dados inválidos")
}