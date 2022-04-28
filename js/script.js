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

const elementoLogo = document.querySelector("#logo")
//Utilizando a função AddEventListenner para escutar possiveis eventos que ocorram com o elemento
elementologo.addEventListener("click",function(){
    elementologo.innerHTML = "SERVIÇOES ESPECIALIZADOS"
})