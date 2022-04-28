//console.log('Estou no arquivo externo')
//DECLARAÇÃO DE VARIAVEIS COM var
var nome = "Alê"
console.log("Meu nome é : " + nome )
//DECLARAÇÃO DE VARIAVEIS COM let
let sobrenome = "Carlos"
console.log("Meu nome completo é : " + (nome+ " " + sobrenome))
//DECLARAÇÃO DE VARIAVEIS COM const
//UTILIZAMOS OS CONSTANTE PARA ARMAZENAR GERALMENTE OS ELEMTNOS QUE VAMOS TRABALHAR
const elementoLogo = document.querySelector("#logo")

//ultlizando a função addEventolistenner para escutar possiveis 
//eventos que ocorram com o elemento
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})