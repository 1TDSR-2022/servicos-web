//console.log('Estou no arquivo externo')
//Declaração de variáveis com var

var nome = "Luiz"
console.log('Meu nome é: '+nome)

//Declaração de variáveis com let
let sobrenome = "Henrique"
console.log('Meu nome completo é: '+(nome+' '+sobrenome))

//Declaração de constante com const

//Utilizamos as constantes para armazenar geralmente os
//elementos que vamos trabalhar

const elementoLogo = document.querySelector("#logo")

//utilizando a função AddEventslistenner para executar possiveis eventos
//que ocorrem com o elemento

elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})