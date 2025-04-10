var prompt = require('prompt-sync')();

let nota1 = prompt("Digite sua nota: ");
let nota2 = prompt("Digite sua nota: ");
let nota3 = prompt("Digite sua nota: ");
let nota4 = prompt("Digite sua nota: ");

function media(nota1, nota2, nota3, nota4){
    return nota1 + nota2 + nota3 + nota4 / 4
}

let result = media(nota1, nota2, nota3, nota4);

if(result >= 5){
    console.log("O aluno aprovou!")
}
else if(result < 5){
    console.log("O aluno reprovou!")
}else{
    console.log("Dados Inválidos!")
}
