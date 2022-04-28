console.log('Estou no arquivo Externo!')

//COMENTARIO DE LINHA
        /*
            COMENTARIO DE BLOCO
        */  
//DECLARAÇÃO DE VARIAVEIS COM VAR

var nome = "Luis"
//contatenação utilizar o sinal de (+)
console.log("Meu nome é : " + nome)


//declaração de variaveis com let
let sobrenome = "Perestrelo"
console.log("Meu nome completo é: " + (nome + " " + sobrenome))

//declaração de constantes com const
//utilizamos os contantes para armazenar geralmente os 
//elementos que vamos trabalhar
const elementoLogo = document.querySelector("#logo")

//utilizando a função addEvent para escutar possiveis
//eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function() {
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})