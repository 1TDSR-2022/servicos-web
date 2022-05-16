console.log('Estou no arquivo externo!')

//comentario de linha
 /*
comentario de bloco
*/

// declaração de variaveis com var
var nome = "Milena"
console.log("Meu nome é:" + nome)

//DECLARAÇÃO DE VARIÁVEIS COM let
let sobrenome = "Goes"
console.log("Meu nome completo é : " + (nome + " " + sobrenome))

//DECLARAÇÃO DE CONSTANTES COM const
//utilizamos os contatos para armazenar geralmente os elementos que vamos trabalhar

//const elementoLogo = document.querySelector("#logo")
//Utilizando a função AddEventListenner para escutar possiveis eventos que ocorram com o elemento
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOES ESPECIALIZADOS"
})

//vetores ou arrays, listas, coleções
var frutas = ["maçã","banana","laranja","uva","kiwi"]
//imprimindo o conteúdo do array console.table(frutas)

//verificando o primeiro elemento do array
//console.log("Primeiro elemento :" + frutas[0])

//verificando o ultimo elemento do array
//console.log("Ultimo elemento :" + frutas[0])

//verificando tamanho do array
//console.log("Tamanho do array:" + frutas.length)

//Verificando o último elemento do array.
//console.log("Primeiro elemento : " + frutas[frutas.length - 1])

//Adicionando um item ao final do array
//frutas.push("melancia")
//console.table(frutas)

//Remover um item ao final do array
// frutas.pop()
// console.table(frutas)

//Remover um item do inicio do array
//frutas.shift()
//console.table(frutas)

//Adicionar um item do array
//frutas.unshift("acerola")
//console.table(frutas)

//removendo um item atraves do indice do array com indexOf()
//var posicao = frutas.indexOf('banana')
//console.log("A ocorrencia foi encontrada no indice:" + posicao)
//frutas.splice(posicao,posicao)
//console.table(frutas)

//Iterando um array com loop FOR
// for(let x = 0; x < frutas.length ; x++){
//     console.log("A FRUTA É : " + frutas[x])
// }

//Iterando um array com loop FOROF
//for (let indice in frutas) {
//    console.log("A FRUTA É:" + frutas[indice])
//}

//Escreva um programa em JavaScript que apresente 
//uma caixa de alerta para o usuário com uma informação qualquer.
//alert("oi prof")

//Faça um programa JavaScript que contenha 3 números e o programa calculará a média aritmética desses números.
// let numA = 5
// let numB = 10
// let numC = 7
// let media = (numA + numB + numC) / 3
// console.log("A média é: " + media)

//Faça um programa JavaScript em que você informará sua altura e peso e o programa calculará o seu IMC.
//Apresente o resultado em um console.log
// let altura = 1.80 
// let peso=80
// let imc = peso/(altura*altura)
// console.log("O seu imc é: "+ imc)

//DECLARAÇÃO DE CONSTANTES com const
//utilizamos as contantes para armazenar geralmente os
// elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListenner para escutar possíveis
//eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})

//selecionando elementos com NOTAÇÃO CSS
//Ex: listaDeLi ['li', 'li']
const listaDeLi = document.querySelectorAll("li")

for (const elementoLi of listaDeLi){
    console.log("Conteúdo do <li>: " + elementoLi.innerHTML)
}