//console.log('Estou no arquivo Externo!')

            //COMENTÁRIO DE LINHA
            /*
                    COMENTÁRIO DE BLOCO
            */

//DECLARAÇÃO DE VARIÁVEIS COM var
var nome = "Alê"
//CONCATENAÇÃO UTILIZAR O SINAL DE ( + )
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁVEIS COM let
let sobrenome = "Carlos"
console.log("Meu nome completo é : " + (nome + " " + sobrenome) )

//DECLARAÇÃO DE CONSTANTES com const
//utilizamos as contantes para armazenar geralmente os
// elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListenner para escutar possíveis
//eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})