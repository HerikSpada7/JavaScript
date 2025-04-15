//.length
//let frutas = ["Maça","Kiwi","Banana","Carambola","Morango","Ameixa","Abacaxi","Abacate","Jabuticaba","Romã","Seriguela","Embu","Caqui","Uva Verde","Uva Roxa"];
//console.log(frutas.length);

//let numeros = [5,10,15]
//console.log(numeros.lenght)

//----------------------------------------------------

//.reverse() -> reverte o nosso array
//let numeros = [70,10,20,30]
//numeros.reverse();
//console.log(numeros);

//----------------------------------------------------

//let nomes = ["RyanKure", "CjBro", "CarlosRoque", "Samanta"]

//.push -> Adiciona um item no final de nosso array
//nome.push("Kureba");
//console.log(nomes);

//----------------------------------------------------

//unshift -> Adiciona um item no primeiro lugar do nosso array
//nome.unshift("Hanma");

//----------------------------------------------------

//.pop -> Remover no final
//nomes.pop();
//console.log(nomes);

//console.log(nomes.splice(2,1))
//console.log(nomes);

//----------------------------------------------------

//let nomesDeAnimais = ["Julie","Meg","Mel","Kiara","Lola","Sol"];
//.include() = verifica se um item existe no array, caso esse item exista, ele retornara true, caso não exista, retornará false
//console.log(nomesDeAnimais.includes(""));

//----------------------------------------------------

//let valores = [30, 55, 90, 66]
//Quero os valores maiores que 50
//let maiores = valores.filter(num => num > 50);

//console.log(maiores)

//----------------------------------------------------

//.map() -> Método usado em arrays que permite transformar os elementos do array original em novos valores, criando um novo array, sem modificar o original.

//lista de alunos e suas notas

//let alunos = [
//    {Nome: "Ryan", Nota: 7}
//    {Nome: "Sillas", Nota: 7}
//    {Nome: "CjBro", Nota: 7}
//];

//let alunoNome = alunos.map(function(element){
//return element.Nome 
//});

//console.log(alunoNome)

//----------------------------------------------------

//let alunoNota = alunos.map(function(element){
//return element.Nota 
//});

//console.log(alunoNota)

//----------------------------------------------------

//criar um array com mensagens persnoalizadas (shishishishishishishi kkkkkkkkkkkkkkkkkkkkk)

// let nomes = ["Caio","Ryan","Vinicius","Dani"]

// let mensagem = nomes.map(itemDoArrayNomes => Olá, ${itemDoArrayNomes}) //let mensagem = nomes.map(itemDoArrayNomes => "Olá, " + {itemDoArrayNomes})
// console.log(mensagem);
//---------------------------------------------
// //Cria um array que lista apenas as iniciais dos nomes
// let nomes  = ["Orton","Tite","CM Punk"];

// let inicialNomes = nomes.map(element => element[0]);
// console.log(inicialNomes);

//---------------------------------------------

//Lista apenas os dominios dos Emails (ratoeira juijitsu kkkkkkkkkkkkkkk)
//let email = ["vhastsz@gmail.com","sillacazord@yahoo.com","ryankure@outlook.com"]

//let dominios = email.map(element => element.split("@")[1]);
//console.log(dominios);

//---------------------------------------------