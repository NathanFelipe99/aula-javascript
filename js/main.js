/*var name = "Nathan";
alert("Bem vindo, " + name);*/
/*
var frase="O Palmeiras é grande";
alert(frase.replace("é grande", "não tem Mundial"));
*/
/*
var telefone="(11)96919-3021";
telefone = telefone.replace("(", "");
telefone = telefone.replace(")", "");
telefone = telefone.replace("-", "");

alert(telefone);
*/
//var posicoes = ["Goleiro", " Zagueiro", " Lateral", " Volante"];
//posicoes.push(" Meia", " Atacante");
//posicoes.pop(); //remove elemento da lista
//alert(posicoes[5]);
//console.log(posicoes.length); //tamanho da lista
//console.log(posicoes.reverse()); //método que inverte os elementos da lista
//alert(posicoes.toString());
//alert(posicoes.toString()[1]); 
//[x] retorna o caractere correspondente à posicao na string. Nesse caso, retorna "o"
//alert(posicoes.join(" |")); //join transforma em string e possibilita separar a string por outro caractere " ", "|","-" etc
/*
var carro = {modelo:"HB20", cor:"Preta", ano:"2015"} //dicionario em json -> parece uma struct em C
console.log(carro);
alert(carro.modelo);
*/

/*
var carros = [{modelo:"HB20", cor:"Preto", ano:"2015"}, {modelo:"Kicks", cor:"Prata", ano:"2019"}] //dicionario em json -> parece uma struct em C
console.log(carros);
alert(carros[1].modelo);
*/
/*
var idade = prompt("Qual a tua idade?"); //abre um pop-up e armazena o conteúdo na variavel
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}*/

var count = 0;
/*while(count < 5){
    alert(count);
    count++;
}*/

/*for(count; count<5; count++){
    alert(count);
}*/
/*
do{
    alert(count);
    count++;
}while(count < 5);
*/

var d = new Date();
//alert(d.getMonth()+1); //uso do +1 pra ele trazer o mês certo (o método começa a contar do 0)
//alert(d.getDay()+1);
alert(d.getDate());