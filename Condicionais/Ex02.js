var prompt = require('prompt-sync')();

let idade = prompt("Digite sua idade: ");

if(idade >= 18){
    console.log("Você poderá tirar a carteira!")
}
else if(idade < 18){
    console.log("Você não pode tirar sua carteira!")
}
else{
    console.log("Essa informação é inválida")
}