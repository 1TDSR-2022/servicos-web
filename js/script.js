console.log('Estou no arquivo Externo!')

            //COMENTÁRIO DE LINHA
            /*
            COMENTÁRIO DE BLOCO
            */

//DECLARAÇÃO DE VARIÁVEIS COM var
var nome = "Guilherme"
//CONCATENAÇÃO UTILIZAR SINAL DE "+"
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁVEIS COM let
let sobrenome = "Nascimento"
console.log("Meu nome completo é: " + (nome + " " + sobrenome))

//DECLARAÇÃO DE CONSTANTES COM const
//Utilizamos as constantes para armazenar geralmente
//os elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListener para escutar possíveis
//eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})
