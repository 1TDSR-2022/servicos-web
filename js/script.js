//console.log('Estou no arquivo Externo!')
// DECLARAÇÃO DE CARIAVEIS COM var
var nome = "Alê"
//CONCATENAÇÃO UTILIZAR O SINAL DE ( + )
console.log("Meu nome é : "+ nome)

//DECLARAÇÃO DE VARIAVEIS COM let

let sobrenome = "Carlos"
console.log("Meu nome completo é : " + (nome + " " + sobrenome))

//DECLARAÇÃO DE CONSTANTES COM const
//utilizamos as constantes para armazenar geralmente os
//elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventLIstener para escutar possiveis
//eventos que ocorram com 

elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})


//VETORES / ARRAYS/ LISTA/ COLEÇÕES
var frutas = ["maçã","banana","laranja","uva","kiwi"]

//verificando o primeiro elemento do array.
//console.log("Primeiro elemento : " + frutas[0])

//verificando o primeiro elemento do array.
//console.log("Primeiro elemento : " + frutas[0])

//Remover um item do inicio do array
// frutas.shift()
// console.table(frutas)

//Adicionando um item ao inicio do array
// frutas.unshift("acerola")
// console.table(frutas)

//Removendo um item através do indice do array do indexOF()
//var posicao = frutas.indexOf('banana')
//console.log("A ocorrência foi encontrada no indice :" + posicao)
//frutas.splice(posicao,posicao)
//console.table(frutas)

//Interando um array com loop FOR
//for(let x = 0; x < frutas.length; x++){
//    console.log("A FRUTA É : "  + frutas[x])
// }

//Interando um array com loop FOR
//for (let fruta of frutas) {
//   console.log("A FRUTA É : " + frutas)
// }

//Interando um array com loop FOR
//for (let indece in frutas) {
//   console.log("A FRUTA É : " + frutas[indice])
// }

const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventLIstener para escutar possiveis
//eventos que ocorram com 

elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})

//Selecionando elementos com NOTAÇÂO css.
//listDekli = ['li', 'li]
const listDeLi = document.querySelectorAll("li")

//for (const elementoLi of listDeLi) {
//    console.log("Conteudo do <li> : " + elementoLi.innerHTML)
//}



