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