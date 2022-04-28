console.log('Estou no arquivo Externo!')

//COMENTARIO DE LINHA
            /* 
                COMENTARIO DE BLOCO
            */
    
// DECLARAÇÃO DE VARIÁVEL COM var
var nome = "Abner"
//CONTACATENAÇÃO UTILIZAR O SINAL DE (+)
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁVEL COM let
let sobrenome = "Ferreira"
console.log("Meu nome completo é : " + (nome + " " + sobrenome))

//DECLARAÇÃO DE CONSTANTE
//utilizar as constante para armazenar geralmente os 
// elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListenner oara escutar possiveis 
//eventos que ocorram com o elemento 
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})