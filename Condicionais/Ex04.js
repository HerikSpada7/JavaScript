var prompt = require('prompt-sync')();

let senhainformada = prompt("Digite sua senha: ");

let verifynum = prompt("Digite sua senha novamente: ");

if(senhainformada == verifynum)
{
    console.log("A senha digitada esta correta!")
}
else
{
    console.log("A senha digitada esta errada!")
}